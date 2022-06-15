import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";

import {
    Box,
    Button,
    Flex,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Image,
    Input,
    Progress,
    Select,
    Text,
    useToast,
  } from "@chakra-ui/react";


  import { useDispatch, useSelector } from "react-redux";

  import { addAdress, getAdress } from "../redux/Adress/action";
  import { CheckOutSmallDiv } from "./CheckOutSmallDiv";

function Payment() {
  const toast = useToast();
    const AddtoCart = useSelector((state) => state.AddtoCart.AddtoCart);
    let totalPrice = 0;
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const handleClick2 = () => {
    setClick2(!click2);
    setClick(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const handleClick3 = () => {
    setClick(false);
    setClick2(false);
    setClick3(!click3);
    setClick4(false);
    setClick5(false);
  };
  const handleClick4 = () => {
    setClick4(!click4);
    setClick(false);
    setClick2(false);
    setClick3(false);
    setClick5(false);
  };
  const handleClick5 = () => {
    setClick5(!click5);
    setClick4(false);
    setClick(false);
    setClick2(false);
    setClick3(false);
  };



const handdleClick=()=>
{

}

 
  return (
    <div id={styles.main}>
      <div id={styles.parent}>
        
        <div>
          <p id={styles.p}>Payment Method</p>

          <div id={styles.div}>
            <p id={styles.p2}>Select Payment Method</p>
            <div id={styles.instant}>
              <div id={styles.p3Hold} onClick={handleClick}>
                <p id={styles.p3}>
                  Instant Pay Using Other UPIs(Gpay,PhonePe,BHIM etc)
                </p>
              </div>
              {click ? (
                <div id={styles.inpHold}>
                  <input
                    type="text"
                    id={styles.upi}
                    placeholder="ENTER UPI ID"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div id={styles.instant}>
              <div onClick={handleClick2}>
                <p id={styles.p3}>Mobile Wallets (PhonePe,Freecharge etc)</p>
              </div>
              {click2 ? (
                <div id={styles.options}>
                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://i.ndtvimg.com/i/2016-06/mobikwik-625_625x300_71464790034.jpg"
                      alt=""
                    />
                    <p>Mobikwik</p>
                  </div>

                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcml_kwNhYZrYOczgmFKu2CooS3989RMaMw&usqp=CAU"
                      alt=""
                    />
                    <p>Payzapp</p>
                  </div>

                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://seeklogo.com/images/A/airtel-logo-2F959F4207-seeklogo.com.png"
                      alt=""
                    />
                    <p>Airtelmoney</p>
                  </div>

                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://toppng.com/uploads/preview/amazon-mobile-app-logo-design-amazon-app-logo-11563014185a4rafc6tku.png"
                      alt=""
                    />
                    <p>Amazonpay</p>
                  </div>

                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/freecharge-logo.png"
                      alt=""
                    />
                    <p>Freecharge</p>
                  </div>

                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://nuvei.com/wp-content/uploads/2021/06/jiomoney.png"
                      alt=""
                    />
                    <p>Jiomoney</p>
                  </div>

                  <div id={styles.div1}>
                    <img
                      id={styles.img}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14ejnUbNksvEOEyjq543jUNb_deVEAR-Se2gBtjIprvbaySblF1xiQTqaghY6cNQlF5g&usqp=CAU"
                      alt=""
                    />
                    <p>Phonepe</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div id={styles.instant}>
              <div id={styles.p3Hold} onClick={handleClick3}>
                <p id={styles.p3}>
                  Credit/Debit cards(Visa,Master,Rupay,Amex etc)
                </p>
              </div>
              {click3 ? (
                <div id={styles.formHold}>
                  <div>
                    <input
                      type="text"
                      id={styles.card}
                      placeholder="CARD NUMBER"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id={styles.holder}
                      placeholder="CARD HOLDER NAME"
                    />
                  </div>
                  <div id={styles.expHold}>
                    <input
                      type="text"
                      id={styles.expiry}
                      placeholder="Expiry(MM/YY)"
                    />
                    <input type="text" id={styles.cvv} placeholder="CVV" />
                  </div>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <input id={styles.check} type="checkbox" />
                    <p id={styles.p4}>
                      We will securely save this card for faster paymnet
                      experience (CVV will not saved). If required you can
                      remove this card from My Account Payment Methods
                    </p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div id={styles.instant}>
              <div id={styles.p3Hold} onClick={handleClick4}>
                <p id={styles.p3}>Net banking(ICICI,HDFC,SBI etc)</p>
              </div>
              {click4 ? (
                <div id={styles.inpHold2}>
                  <div id={styles.banks}>
                    <div id={styles.logoHold}>
                      {" "}
                      <img
                        id={styles.logo}
                        src="https://media.glassdoor.com/sqll/38314/bank-of-india-squarelogo.png"
                      />{" "}
                      <p>BOI</p>
                    </div>
                    <div id={styles.logoHold}>
                      {" "}
                      <img
                        id={styles.logo}
                        src="https://cdn.theorg.com/6d47d353-2e64-4ad9-be6f-4290dab69d44_thumb.png"
                      />{" "}
                      <p>HDFC</p>{" "}
                    </div>
                    <div id={styles.logoHold}>
                      {" "}
                      <img
                        id={styles.logo}
                        src="https://www.kindpng.com/picc/m/23-238516_icici-bank-png-industrial-credit-and-investment-corporation.png"
                      />{" "}
                      <p>ICICI</p>{" "}
                    </div>
                    <div id={styles.logoHold}>
                      {" "}
                      <img
                        id={styles.logo}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0iComfpPNe3wtTozOQJ5iIvREQENqIvf3I0kec3qQvm0jMKHEBTnSFaG01LUDQLatnBY&usqp=CAU"
                      />{" "}
                      <p>SBI</p>{" "}
                    </div>
                    <div id={styles.logoHold}>
                      {" "}
                      <img
                        id={styles.logo}
                        src="https://s3-symbol-logo.tradingview.com/yes-bank--600.png"
                      />{" "}
                      <p>YES</p>{" "}
                    </div>
                    <a
                      style={{
                        textDecoration: "underline",
                        marginLeft: "20px",
                        marginTop: "17px",
                      }}
                      href=""
                    >
                      {" "}
                      view more
                    </a>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div id={styles.instant}>
              <div id={styles.p3Hold} onClick={handleClick5}>
                <p id={styles.p3}>Cash on Delivery</p>
              </div>
              {click5 ? (
                <div id={styles.inpHold}>
                  <p id={styles.p3}>
                    We recommend using a digital payment for completing the
                    payment
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div id={styles.btnHold}>
              <button
                id={styles.btn1}
                onClick={() => navigate("/cart")}
              >Delivary info</button>
              <Button
                id={styles.btn2}
                onClick={() =>
                  handdleClick(
                    toast({
                      position: "top",
                      isClosable: true,
    
                      bg: "blue",
                      duration: 4000,
                      render: () => (
                        <Box borderRadius={"50px"}>
                          <Box
                            color="white"
                            textAlign={"center"}
                            width={"500px"}
                            p={3}
                            
                            bg={"gray"}
                          >
                           
                            <Text>Order ID No:0000004059595959</Text></Box>
                          
                        
                        </Box>
                      ),
                    })
                  )
                }
              >Complete Order</Button>
            </div>
          </div>
        </div>
     
      <Box bg="#f5f5f5" width="50%" p="6">
            <Box>
              {AddtoCart.map((item) => {
                totalPrice += item.totalPrice;
                return <CheckOutSmallDiv key={item.id} {...item} />;
              })}
            </Box>
            <Box bg="gray" h={"1px"} width={"80%"}></Box>
            <Box display={"flex"} p="2" mt="10px" gap={"10px"}>
              <Input placeholder="Apply Coupen Code" size="lg" width={"70%"} />
              <Button>Apply</Button>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Box color="gray" mt="10px" width={"80%"}>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text> ₹.{(totalPrice).toLocaleString("hi-IN")} .00</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text fontSize={"13px"}>Calculated at next step</Text>
              </Flex>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Flex mt="10px" fontSize={"20px"} fontWeight={800} justifyContent={"space-between"} width={"80%"}>
                <Text>Total</Text>
                <Text> ₹.{(totalPrice).toLocaleString("hi-IN")} .00</Text>
            </Flex>
          </Box>
    </div>
    </div>
  );
}

export default Payment;