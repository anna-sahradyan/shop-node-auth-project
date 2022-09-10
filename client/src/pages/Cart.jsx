import React from 'react';
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
import {selectCart} from "../store/cartRedux";

const Cart = () => {
    const cart = useSelector(selectCart);
    return (<>
        <Container>
            <Nav/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton> CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>SHOPPING BAG(2)</TopText>
                        <TopText>YOUR WISHLIST(0)</TopText>
                    </TopTexts>
                    <TopButton type={'filled'}>CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetail>
                                    <Image
                                        src={'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'}/>
                                    <Details>
                                        <ProductName><b>product: </b>{product.title}</ProductName>
                                        <ProductId><b>ID: </b>{product._id}</ProductId>
                                        <ProductColor color={product.color}/> <ProductSize><b>Size: </b>{product.size}
                                    </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add/>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Remove/>
                                        </ProductAmountContainer>
                                        <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                    </PriceDetail>
                                </ProductDetail>
                            </Product>))}
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src={'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg'}/>
                                <Details>
                                    <ProductName><b>product: </b>PlayStation 5</ProductName>
                                    <ProductId><b>ID: </b>2</ProductId>
                                    <ProductColor color={'black'}/> <ProductSize><b>Size: </b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>3</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice> $ 500</ProductPrice>
                                </PriceDetail>
                            </ProductDetail>
                        </Product>
                        ))}

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                Subtotal
                            </SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Shipping Discount
                            </SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>
                                Total
                            </SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW </Button>
                    </Summary>
                </Bottom>

            </Wrapper>
            <Footer/>
        </Container>
    </>);
};

export default Cart;