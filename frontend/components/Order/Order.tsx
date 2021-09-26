import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { ActionTypes } from "ducks/order";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { DISCOUNT_FOR_AUTHORIZATION } from "constants/cart";
import { ROUTES } from "constants/routes";
import { Button, Icon, Modal } from "ui-kit";
import { numberWithSpaces } from "utils/numberWithSpaces";
import { RadioCardPaymentMethod } from "./RadioCardPaymentMethod/RadioCardPaymentMethod";
import styles from "./Order.module.scss";

export const Order: React.FC = () => {
  const CARD = "card";
  const CASH = "cash";
  const CARD_TEXT = "Картой онлайн";
  const CASH_TEXT = "Наличными при получении";
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [preliminaryPaymentMethod, setPreliminaryPaymentMethod] =
    useState(CARD);
  const [paymentMethod, setPaymentMethod] = useState(CARD);
  const order = useTypedSelector(state => state.order);
  const cart = useTypedSelector(state => state.cart);
  const account = useTypedSelector(state => state.account);
  const dispatch = useDispatch();
  const { hasMounted } = useMounted();
  const router = useRouter();
  const { isAuthenticated, user } = hasMounted && account;
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

  const handleSubmit = () => {
    // dispatch({
    //   type: ActionTypes.FETCH_ORDER_CREATE,
    //   payload: {
    //     orderItems: cart.entities,
    //     shippingAddress: order.shippingAddress,
    //     paymentMethod: null,
    //     itemsPrice: priceWithDiscountTotal,
    //     shippingPrice: shippingPrice,
    //     taxPrice: 0,
    //     totalPrice: priceTotal,
    //   },
    // });
  };

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

  return (
    <section className={styles.Order}>
      <h2 className={styles.Title}>Оформление заказа</h2>
      <div className={styles.Inner}>
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
              <div className={styles.AddressText}>
                {order.shippingAddress && order.shippingAddress.address}
              </div>
            </div>
          </div>
          <div className={styles.Products}>
            <div className={styles.Inner}>
              <h3 className={styles.SubTitle}>Товары</h3>
              <Link
                href={{
                  pathname: ROUTES.CART + cart.id,
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
                  {user && user.last_name}
                  <> </>
                  {user && user.first_name}
                </div>
                <div className={styles.RecipientInfoSubTitle}>
                  {user && user.email},<> </>
                  {user && user.phone_number}
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
      <Modal isOpen={isOpenModal} onCloseModal={handleCloseModal}>
        <Modal.Header>
          <h2>Способы оплаты</h2>
          <div className={styles.ModalDefence}>
            <Icon className={styles.ModalDefenceIcon} type="Defence" />
            <span>Полный возврат, если вы не получили товар</span>
          </div>
        </Modal.Header>
        <Modal.Content>
          <div className={styles.Inner}>
            <RadioCardPaymentMethod
              name={CARD}
              value={CARD_TEXT}
              isActive={preliminaryPaymentMethod === CARD}
              onChoice={handleChoicePaymentMethod}
            />
            <RadioCardPaymentMethod
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
