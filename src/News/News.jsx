import React from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Search from "./Search";
import Loader from "react-loader-spinner";

export default class NewsComponent extends React.Component{
    state = {
        articles: [],
        isLoading: true,
        errors:null
      };

      getArticles = (value) => {
        if(!value){
          axios.get("https://newsapi.org/v2/top-headliness?country=id&apiKey=c313cc9772c14da19f0a8a18c1a32063")
          .then(response => response.data.articles.map(article => ({
              image:`${article.urlToImage}`,
              title: `${article.title}`,
              author:`${article.author}`,
              desc:`${article.description}`,
              date: `${article.publishedAt}`,
              url: `${article.url}`
            }))
          )
          .then(articles => {
            this.setState({
              articles,
              isLoading: false
            });
          })
          .catch(error => {
            if(error.response){
              console.log("Yang Error Data", error.response.data)
              this.setState({ errors:<h2>Mohon Maaf Sedang Dalam Perbaikan</h2>, isLoading: false })
            }else if(error.request){
              console.log("Yang Error Request",error.request)
            }else{
              console.log('Errornya ', error.message)
            }

          console.log("Yang Error Config",error.config)
        
        });

        }else{                
          axios.get(`https://newsapi.org/v2/top-headlines?q=${value}&country=id&apiKey=c313cc9772c14da19f0a8a18c1a32063`)
            .then(response => response.data.articles.map(article => ({
                image:`${article.urlToImage}`,
                title: `${article.title}`,
                author:`${article.author}`,
                desc:`${article.description}`,
                date: `${article.publishedAt}`,
                url: `${article.url}`
              }))
            )
            .then(articles => {
              this.setState({
                articles,
                isLoading: false
              });
            })
            .catch(error => this.setState({ errors:<h2>Mohon Maaf Sedang Dalam Perbaikan</h2>, isLoading: false }));

        }
      }

      componentDidMount() {
        this.getArticles();
      }
    
      render() {
        const { isLoading, articles } = this.state;
        return (
            <div className="bg-secondary">
              <Search receiveValue={this.getArticles}/>                
                <Container>
                  <Row>
                    {!isLoading 
                    ? (articles.map(article => {
                        const { image,title, date, author, desc, url } = article;
                        return (   
                                <Col className="col-lg-4 col-md-6 col-sm-12 mb-4" key={title}>                   
                                  <Card className="text-start">
                                    <Card.Img style={{height:"200px"}} variant="top" src={image} />
                                    <Card.Body>
                                      <Card.Title className=" mb-3">{title}</Card.Title>                        
                                      <Card.Subtitle className="mb-2 text-muted ">{author}</Card.Subtitle>
                                      <Card.Subtitle className="text-muted  mb-2">{date}</Card.Subtitle>
                                      <Card.Text>{desc}</Card.Text>
                                      <Button 
                                        style={{backgroundColor:"dodgerblue",color:"white",padding:"10px", borderRadius:"5px", textDecoration:"none"}} 
                                        href={url} target="_blank"
                                        >Lanjutkan Membaca</Button>
                                    </Card.Body>
                                  </Card>
                                </Col>  
                                );
                            })
                      ) 
                      : 
                      (<Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={3000}/>)}

                      {this.state.errors}
                  </Row>
                </Container>
            </div>
        );
      }
}