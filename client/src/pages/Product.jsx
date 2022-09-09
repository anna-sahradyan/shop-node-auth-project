import React, {useEffect, useState} from 'react';
import {
    Container,
    Image,
    ImgContainer,
    Wrapper,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button
} from "../components/styledContainer/productPageStyle";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {publicRequest} from "../requestMethod";
import {addProduct} from "../store/cartRedux";
import {useDispatch} from "react-redux";


const Product = () => {
    let dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    //! get one product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const result = await publicRequest.get(`/products/find/ ${id}`);
                setProduct(result.data)


            } catch (err) {
                console.log(err)
            }
        }
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 &&
            setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }

    }
    const handleClick = () => {
        dispatch(addProduct({...product, quantity,color,size}));
    }
    return (
        <>

            <Container>
                <Nav/>
                <Announcement/>
                <Wrapper>
                    <ImgContainer>
                        <Image
                            src={product.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Desc>{product.desc}</Desc>
                        <Price>${product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>
                                    Color
                                </FilterTitle>
                                {product.color?.map((c) => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                                ))}
                            </Filter>
                            <Filter>
                                <FilterTitle>
                                    Size
                                </FilterTitle>
                                <FilterSize onChange={(e) => setSize((e.target.value))}>
                                    {product.size?.map((s) => (
                                        <FilterSizeOption key={s} >{s}</FilterSizeOption>
                                    ))}

                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity("inc")}/>
                            </AmountContainer>
                            <Button onClick={handleClick}>Add To Cart</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <NewsLetter/>
                <Footer/>
            </Container>
        </>);
};

export default Product;