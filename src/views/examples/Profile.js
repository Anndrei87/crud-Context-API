/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { UsuarioLogadoContext } from "context/UsuarioLogadoContext";
import UsuarioDataService from "services/UsuarioDataService";
import React, { useRef } from "react";
import {useEffect, useContext, useState} from "react"

import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";



const Profile = (props) => {

  const Api ={ 
      id: "1",
      username: "Username ",
      firstname: "Firstname ",
      lastname: "Lastname ",
      email: "Email ",
      address: "Address ",
      city: "City ",
      country: "Country ",
      postalcode: "Postalcode ",
      about: "About ",
      password: "1",
  }

  const [usuarioApi, setUsuarioApi] = useState(Api)
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)
  const [profilePicture, setProfilePicture] = useState("")

  useEffect(()=>{
      setUsuarioApi(usuarioLogado)
  },[])

    const   handleInputChange = event => {
    const { name, value } = event.target;
    setUsuarioApi({ ...usuarioApi, [name]: value });
    //console.log(usuarioLogado)
    
  };
  const getData = () => {
    console.log(UsuarioDataService.get(1))

    UsuarioDataService.get(1)
    .then(response=>{
      setUsuarioLogado(response.data);
    })
    .catch(e=>{
      console.log(e)
    })
  }
  useEffect(()=>{
    getData()
  },[]);

  const callSettings = () =>{
    props.history.push("/settings/changePassword")
  }
  
  return (
    <>
      <UserHeader user={usuarioApi}/>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a id="profilePciture" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src=
                        {
                          require("../../assets/img/theme/team-4-800x800.jpg").default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {usuarioLogado.username}
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                   {usuarioLogado.city}, {usuarioLogado.country}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                   description
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link to={"/settings/delete"}>
                      <Button
                        color="danger"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </Link>
                  </Col>
                  <Col className="text-right" xs="2">
                    <Button
                      color="primary"
                      onClick={() => callSettings()}
                      size="sm"
                    >
                      Settings
                    </Button>
                    
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioApi.username}
                            id="input-username"
                            name="username"
                            onBlur={handleInputChange}
                            placeholder="Username"
                            value={usuarioApi.username}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            name="email"
                            placeholder="email@email.com"
                            value={usuarioApi.email}
                            onChange={handleInputChange}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioApi.firstname}
                            onChange={handleInputChange}
                            id="input-first-name"
                            name="firstname"
                            placeholder="First name"
                            value={usuarioApi.firstname}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioApi.lastname}
                            onChange={handleInputChange}
                            id="input-last-name"
                            name="lastname"
                            placeholder="Last name"
                            value={usuarioApi.lastname}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioApi.address}
                            onChange={handleInputChange}
                            id="input-address"
                            name="address"
                            placeholder="Home Address"
                            value={usuarioApi.address}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioApi.city}
                            onChange={handleInputChange}
                            id="input-city"
                            name="city"
                            placeholder="City"
                            value={usuarioApi.city}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioApi.country}
                            onChange={handleInputChange}
                            id="input-country"
                            name="country"
                            placeholder="Country"
                            value={usuarioApi.country}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            name="postalcode"
                            placeholder={usuarioApi.postalcode}
                            value={usuarioApi.postalcode}
                            onChange={handleInputChange}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        name="about"
                        defaultValue={usuarioApi.about}
                        onChange={handleInputChange}
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};
export default Profile;
