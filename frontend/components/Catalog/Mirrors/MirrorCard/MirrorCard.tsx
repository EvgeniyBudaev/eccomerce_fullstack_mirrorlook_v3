import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import isNull from "lodash/isNull";
import { RatingNumber } from "components";
import { Error404 } from "components/Error";
import { ROUTES } from "constants/routes";
import { ActionTypes, ICartState } from "ducks/cart";
import {
  cartSelector,
  loadingSelector,
  unhandledErrorSelector,
} from "ducks/selectors";
import { setUnhandledClearError } from "ducks/unhandledError";
import { useDispatch, useSelector } from "hooks";
import { IMirror } from "types/mirror";
import {
  Breadcrumbs,
  Button,
  SliderNextArrow,
  SliderPrevArrow,
  Spinner,
} from "ui-kit";
import { SliderAsNavFor } from "ui-kit/Slider/SliderAsNavFor";
import { AlertError } from "utils/alert";
import { getDeclination, reviewDeclinations } from "utils/declinations";
import { getErrorByStatus } from "utils/error";
import { numberWithSpaces } from "utils/numberWithSpaces";
import styles from "./MirrorCard.module.scss";

export interface IMirrorCardProps {
  mirror: IMirror;
  reviewsCount: string | number;
}

export const MirrorCard: React.FC<IMirrorCardProps> = ({
  mirror,
  reviewsCount,
}) => {
  const sliderImages = [
    mirror.image,
    mirror.product_photo1,
    mirror.product_photo2,
    mirror.product_photo3,
    mirror.product_photo4,
  ];
  const [currentCart, setCurrentCart] = useState<ICartState>(null);
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const { isLoading } = useSelector(loadingSelector);
  const { error } = useSelector(unhandledErrorSelector);

  useEffect(() => {
    if (error) {
      const errorByStatus = getErrorByStatus(error);
      AlertError(errorByStatus.error.body);
    }
  }, [error]);

  const getDefaultTextCrumbGenerator = useCallback(
    (subpath: string) => {
      return (
        {
          mirrors: mirror.catalog,
          [mirror.product_slug]: mirror.title,
        }[subpath] || subpath
      );
    },
    [mirror.catalog, mirror.product_slug, mirror.title]
  );

  const handleAddToCart = () => {
    dispatch({
      type: ActionTypes.FETCH_CART_ADD_ITEM,
      payload: {
        cart: cart.id,
        product: mirror.id,
        quantity: 1,
      },
    });
  };

  const getCart = (cart: ICartState) => {
    return cart;
  };

  useEffect(() => {
    async function fetchCart(cart) {
      const response = await getCart(cart);
      setCurrentCart(response);
    }
    fetchCart(cart);
  }, [cart]);

  const renderButton = (mirror: IMirror) => {
    const isProductAtCart =
      !isNull(currentCart) &&
      currentCart.entities.some(item => item.product.id === mirror.id);

    return isProductAtCart ? (
      !isNull(currentCart.id) && (
        <Link
          href={{
            pathname: `${ROUTES.CART}${currentCart.id}`,
          }}
        >
          <a className={styles.ButtonGoAtCart}>?????????????? ?? ??????????????</a>
        </Link>
      )
    ) : (
      <Button
        className={styles.ProductAddToCart}
        isDisabled={mirror.count_in_stock <= 0}
        onClick={handleAddToCart}
      >
        ???????????????? ?? ??????????????
      </Button>
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setUnhandledClearError());
    };
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  if (!mirror) {
    return <Error404 />;
  }

  return (
    <div className={styles.MirrorCard}>
      <AlertContainer />
      <Breadcrumbs getDefaultTextGenerator={getDefaultTextCrumbGenerator} />
      <h1 className={styles.Title}>{mirror.title}</h1>
      <div className={styles.Navigation}>
        <RatingNumber rating={mirror.rating} />
        <Link href={`${ROUTES.MIRRORS}${mirror.product_slug}/reviews`}>
          <a className={styles.NavigationText}>
            {reviewsCount}
            &nbsp;
            {getDeclination(Number(reviewsCount), reviewDeclinations)}
          </a>
        </Link>
      </div>
      <div className={styles.ProductMainInfo}>
        <div className={styles.ColMedia}>
          <div className={styles.ProductGallery}>
            <SliderAsNavFor
              images={sliderImages}
              heightNav="320"
              heightFor="60"
              widthNav="320"
              widthFor="60"
              nextArrow={
                <SliderNextArrow opacity={1} styles={{ right: "0px" }} />
              }
              prevArrow={
                <SliderPrevArrow opacity={1} styles={{ left: "0px" }} />
              }
            />
          </div>
        </div>
        <div className={styles.ColSpecification}>
          <div className={styles.ProductSpecification}>
            <h2 className={styles.ProductSpecificationTitle}>????????????????</h2>
            <ul className={styles.ProductSpecificationList}>
              <li>???????????????? ??????????????: {mirror.attributes[0].mirror_material}</li>
              <li>???????????????? ????????: {mirror.attributes[0].frame_material}</li>
              <li>???????? ????????: {mirror.attributes[0].frame_color}</li>
              <li>
                ???????????? ??????????????, ?? ??????????:{" "}
                {mirror.attributes[0].height_with_frame &&
                  mirror.attributes[0].width_with_frame && (
                    <>
                      {mirror.attributes[0].height_with_frame} x{" "}
                      {mirror.attributes[0].width_with_frame} ????
                    </>
                  )}
              </li>
              <li>
                ???????????? ?????????????? ?????? ????????:{" "}
                {mirror.attributes[0].height_without_frame &&
                  mirror.attributes[0].width_without_frame && (
                    <>
                      {mirror.attributes[0].height_without_frame} x{" "}
                      {mirror.attributes[0].width_without_frame} ????
                    </>
                  )}
              </li>
              <li>
                ??????:{" "}
                {mirror.attributes[0].weight
                  ? `${mirror.attributes[0].weight} ????`
                  : ""}
              </li>
              <li>
                ?????????????? ????????????: {mirror.attributes[0].is_faced ? "????" : "??????"}
              </li>
              <li>??????????: {mirror.attributes[0].form}</li>
              <li>??????????????????????????: {mirror.brand}</li>
            </ul>
            <div>{mirror.description}</div>
          </div>
        </div>
        <div className={styles.ColPrice}>
          <div className={styles.ProductPrice}>
            {numberWithSpaces(parseInt(mirror.price))} ???
          </div>
          <div>
            <div className={styles.ColPriceTitle}>??????????:</div>{" "}
            <div className={styles.ProductStatus}>
              {mirror.count_in_stock > 0 ? "?? ??????????????" : "?????????? ??????????????????????"}
            </div>
          </div>
          <div className={styles.ProductPay}>
            ???????????? ????????????/??????????????, ??????????????????
          </div>
          {renderButton(mirror)}
        </div>
      </div>
    </div>
  );
};
