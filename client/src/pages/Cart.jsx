import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {
    Bottom,
    Container,
    Details,
    Info,
    PriceDetail,
    Product,
    ProductColor,
    ProductDetail,
    ProductId,
    ProductPrice,
    ProductName,
    ProductSize,
    Summary,
    Title,
    Top,
    TopButton,
    TopText,
    TopTexts,
    Wrapper,
    Image,
    ProductAmount,
    ProductAmountContainer,
    Hr,
    SummaryTitle,
    SummaryItem,
    SummaryItemText,
    SummaryItemPrice,
    Button
} from "../components/styledContainer/cartStyle";
import {Add, Remove} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectCart} from "../store/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../requestMethod";
import { useNavigate} from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
    const cart = useSelector(selectCart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token)
    }
    console.log(stripeToken);
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const result = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount:500,

                });
                navigate("/success", {  stripeData: result.data,
                    products: cart
                });
            } catch (err) {

            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);
    return (<>
        <Container>
            <Nav/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img}/>
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> {product.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> {product._id}
                                        </ProductId>
                                        <ProductColor color={product.color}/>
                                        <ProductSize>
                                            <b>Size:</b> {product.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                        $ {product.price * product.quantity}
                                    </ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Ann  Shop"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    </>);
};

export default Cart;