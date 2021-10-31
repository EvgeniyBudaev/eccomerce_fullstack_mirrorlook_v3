import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { isNull } from "lodash";
import { ActionTypes, IPayloadOrderRecipientSave } from "ducks/order";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { DISCOUNT_FOR_AUTHORIZATION } from "constants/cart";
import { ROUTES } from "constants/routes";
import { Button, Icon, Modal, Spinner } from "ui-kit";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { IFetchOrderResponse } from "api/types/order";
import { IUserAccount } from "api/types/account";
import { RadioCardPaymentMethod } from "./RadioCardPaymentMethod/RadioCardPaymentMethod";
import styles from "./Order.module.scss";

export const Order: React.FC = () => {
  const CARD = "card";
  const CASH = "cash";
  const CARD_TEXT = "Картой онлайн";
  const CASH_TEXT = "Картой или наличными при получении";
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [preliminaryPaymentMethod, setPreliminaryPaymentMethod] =
    useState(CARD);
  const [paymentMethod, setPaymentMethod] = useState(CARD);
  const [needRequestIndicator, setNeedRequestIndicator] = useState(0);
  const order = useTypedSelector(state => state.order);
  const cart = useTypedSelector(state => state.cart);
  const account = useTypedSelector(state => state.account);
  const loading = useTypedSelector(state => state.loading);
  const unhandledError = useTypedSelector(state => state.unhandledError);
  const { isLoading } = loading;
  const { error } = unhandledError;
  const dispatch = useDispatch();
  const { hasMounted } = useMounted();
  const router = useRouter();
  const { isAuthenticated, user } = hasMounted && account;
  const { isOrderConfirmed, order_user, shipping_address } =
    hasMounted && order;
  const cartId = hasMounted && cart.id;
  const itemsCountTotal =
    hasMounted && cart.entities.reduce((acc, item) => acc + item.quantity, 0);
  const priceSubTotal =
    hasMounted &&
    cart.entities.reduce(
      (acc, item) => acc + Number(item.product.price) * item.quantity,
      0
    );
  const priceWithDiscountTotal = isAuthenticated
    ? priceSubTotal * DISCOUNT_FOR_AUTHORIZATION
    : priceSubTotal;
  const shippingPrice = Number(
    (priceWithDiscountTotal > 100000 ? 0 : 500).toFixed(2)
  );
  const priceTotal = Number(
    (priceWithDiscountTotal + shippingPrice).toFixed(2)
  );
  const orderItems = cart.entities.map(item => ({
    image: item.product.image,
    price: item.product.price,
    product: item.product.id,
    title: item.product.title,
    quantity: item.quantity,
  }));

  const requestOrderSendToEmail = useCallback(() => {
    setNeedRequestIndicator(needRequestIndicator + 1);
  }, [setNeedRequestIndicator, needRequestIndicator]);

  const handleSubmit = () => {
    dispatch({
      type: ActionTypes.FETCH_ORDER_CREATE,
      payload: {
        is_delivered: false,
        is_paid: false,
        order_items: orderItems,
        order_user: order_user,
        payment_method: paymentMethod,
        shipping_address: shipping_address,
        shipping_price: shippingPrice,
        tax_price: 0,
        total_price: priceTotal,
        user: isAuthenticated ? user.id : null,
      },
    });
    requestOrderSendToEmail();
  };

  const handleOrderSendToEmail = useCallback(
    (
      orderInfo: IFetchOrderResponse,
      order_user: IPayloadOrderRecipientSave,
      user: IUserAccount
    ) => {
      const bodyEmail = `
      Здравствуйте!
  
      Ваш Заказ № ${orderInfo?.id} успешно оформлен!
        
      Получатель: ${order_user?.first_name} ${order_user?.last_name}
      Email: ${order_user?.email}
      моб.: ${order_user?.phone_number}
      
      Способ оплаты: ${
        orderInfo?.payment_method === "card"
          ? "Картой онлайн"
          : "Картой или наличными при получении"
      }
      
      Общая сумма заказа: ${orderInfo.total_price} ₽
      `;
      console.log("Письмо отправлено!");
      dispatch({
        type: ActionTypes.FETCH_ORDER_SEND_TO_EMAIL,
        payload: {
          customer_email: isAuthenticated ? user?.email : order_user?.email,
          message: bodyEmail,
          subject: `Заказ № ${orderInfo.id} успешно оформлен`,
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleChoicePaymentMethod = (name: string) => {
    setPreliminaryPaymentMethod(name);
  };

  const handleModalSubmit = () => {
    setPaymentMethod(preliminaryPaymentMethod);
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (!isNull(order.order) && isOrderConfirmed) {
      console.log("orderInfo", order.order);
      handleOrderSendToEmail(order.order, order_user, user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrderConfirmed]);

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.Order}>
      <h2 className={styles.Title}>Оформление заказа</h2>
      <div className={classNames(styles.Inner, styles.OrderInnerMobile)}>
        <div className={styles.BlockLeft}>
          <div className={styles.Shipping}>
            <div className={styles.Inner}>
              <h3 className={styles.SubTitle}>Доставка курьером</h3>
              <Link
                href={{
                  pathname: ROUTES.SHIPPING,
                }}
              >
                <a className={styles.Link}>Изменить</a>
              </Link>
            </div>
            <div className={styles.Address}>
              <Icon className={styles.AddressIcon} type="House" />
              <div className={styles.AddressInfo}>
                <div className={styles.AddressInfoTitle}>
                  {shipping_address && shipping_address.address}
                </div>
                <div className={styles.AddressInfoSubTitle}>
                  {shipping_address &&
                    (shipping_address.apartment
                      ? "квартира: " + shipping_address.apartment
                      : null)}
                  <> </>
                  {shipping_address &&
                    (shipping_address.entrance
                      ? "подъезд: " + shipping_address.entrance
                      : null)}
                  <> </>
                  {shipping_address &&
                    (shipping_address.floor
                      ? "этаж: " + shipping_address.floor
                      : null)}
                  <> </>
                  {shipping_address &&
                    (shipping_address.floor
                      ? "домофон: " + shipping_address.intercom
                      : null)}
                  <> </>
                  {shipping_address &&
                    shipping_address.comment &&
                    "комментарий: " + shipping_address.comment}
                  <> </>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Products}>
            <div className={styles.Inner}>
              <h3 className={styles.SubTitle}>Товары</h3>
              <Link
                href={{
                  pathname: ROUTES.CART + cartId,
                }}
              >
                <a className={styles.Link}>Изменить</a>
              </Link>
            </div>
            {hasMounted && cart.entities.length === 0 ? (
              <p>Ваша корзина пуста.</p>
            ) : (
              <div>
                {hasMounted &&
                  cart.entities.map(item => (
                    <div className={styles.Product} key={item.id}>
                      <div className={styles.ProductInfo}>
                        <Link
                          href={`/${item.product.catalog_slug}/${item.product.product_slug}`}
                        >
                          <a>
                            <Image
                              src={item.product.product_photo1}
                              alt=""
                              width="50"
                              height="50"
                            />
                          </a>
                        </Link>
                        <span className={styles.ProductTitle}>
                          {item.product.title}
                        </span>
                      </div>
                      <div className={styles.ProductPrice}>
                        {item.quantity} x{" "}
                        {numberWithSpaces(Number(item.product.price).toFixed())}{" "}
                        ={" "}
                        {numberWithSpaces(
                          item.quantity * Number(item.product.price)
                        )}{" "}
                        ₽
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className={styles.Recipient}>
            <div className={styles.Inner}>
              <h3 className={styles.SubTitle}>Получатель</h3>
              <Link
                href={{
                  pathname: ROUTES.RECIPIENT,
                }}
              >
                <a className={styles.Link}>Изменить</a>
              </Link>
            </div>
            <div className={styles.RecipientInfo}>
              <Icon className={styles.RecipientInfoIcon} type="User2" />
              <div className={styles.RecipientInfoText}>
                <div className={styles.RecipientInfoTitle}>
                  {isAuthenticated && user
                    ? user.last_name
                    : order_user && order_user.last_name}
                  <> </>
                  {isAuthenticated && user
                    ? user.first_name
                    : order_user && order_user.first_name}
                </div>
                <div className={styles.RecipientInfoSubTitle}>
                  email:{" "}
                  {isAuthenticated && user
                    ? user.email
                    : order_user && order_user.email}
                  <> , </>
                  моб.:{" "}
                  {isAuthenticated && user
                    ? user.phone_number
                    : order_user && order_user.phone_number}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.BlockRight}>
          <div className={styles.Total}>
            <div className={styles.Inner}>
              <h3 className={styles.SubTitle}>Итого</h3>
              <h3 className={styles.SubTitle}>
                {numberWithSpaces(priceTotal)} ₽
              </h3>
            </div>
            <div className={styles.Inner}>
              <div>Товары - {itemsCountTotal.toString()} шт.</div>
              <div>{numberWithSpaces(priceWithDiscountTotal)} ₽</div>
            </div>
            <div className={styles.Inner}>
              <div>Доставка</div>
              <div>{numberWithSpaces(shippingPrice)} ₽</div>
            </div>
          </div>
          <div className={styles.Payment}>
            <div className={styles.Inner}>
              <div className={styles.PaymentInfo}>
                {paymentMethod === CARD ? (
                  <>
                    <Icon className={styles.PaymentIcon} type="Card" />
                    <div>{CARD_TEXT}</div>
                  </>
                ) : (
                  <>
                    <Icon className={styles.PaymentIcon} type="Cash" />
                    <div>{CASH_TEXT}</div>
                  </>
                )}
              </div>
              <div className={styles.PaymentChange} onClick={handleOpenModal}>
                Изменить
              </div>
            </div>
            <Button className={styles.PaymentButton} onClick={handleSubmit}>
              Перейти к оплате
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.Controls}>
        <Link
          href={{
            pathname: ROUTES.RECIPIENT,
          }}
        >
          <a className={styles.ControlsLink}>
            <Icon type="ArrowBack" />
            <div className={styles.ControlsText}>Назад</div>
          </a>
        </Link>
      </div>
      <Modal
        className={styles.OrderModal}
        isOpen={isOpenModal}
        onCloseModal={handleCloseModal}
      >
        <Modal.Header className={styles.OrderModalHeaderMobile}>
          <h2>Способы оплаты</h2>
          <div className={styles.ModalDefence}>
            <Icon className={styles.ModalDefenceIcon} type="Defence" />
            <span>Полный возврат, если вы не получили товар</span>
          </div>
        </Modal.Header>
        <Modal.Content>
          <div className={classNames(styles.Inner, styles.OrderInnerMobile)}>
            <RadioCardPaymentMethod
              className={styles.OrderRadioCardPaymentMethodMobile}
              name={CARD}
              value={CARD_TEXT}
              isActive={preliminaryPaymentMethod === CARD}
              onChoice={handleChoicePaymentMethod}
            />
            <RadioCardPaymentMethod
              className={styles.OrderRadioCardPaymentMethodMobile}
              name={CASH}
              value={CASH_TEXT}
              isActive={preliminaryPaymentMethod === CASH}
              onChoice={handleChoicePaymentMethod}
            />
          </div>
        </Modal.Content>
        <Modal.Footer buttonSubmitText="Выбрать" onSubmit={handleModalSubmit} />
      </Modal>
    </section>
  );
};
