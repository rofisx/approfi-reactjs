import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import SearchFc from "./Search_Fc";

const NewsFc = () => {
    let [news, setNews] = useState([])
    let [err, setErr] = useState('')
    let [loading, setLoading] = useState(true)

    const getNews = (value)=>{
        if(!value){
            axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=cb8355b1b3b8424f811b6833abad6dc0")
            .then(res => {
                setNews(res.data.articles)
                setLoading(false)
                })
            .catch(error => {
                if(error.response){
                  alert(`${error.response.data.message}`)
                }    
                setLoading(false)        
                setErr(<h2 style={{color:"white"}}>Mohon Maaf Sedang Dalam Perbaikan</h2>)     
            })
        }else{
            axios.get(`https://newsapi.org/v2/top-headlines?q=${value}&country=id&apiKey=cb8355b1b3b8424f811b6833abad6dc0`)
            .then(res => {
                setNews(res.data.articles)
                setLoading(false)
                })
            .catch(error => {
                if(error.response){
                  alert(`${error.response.data.message}`)
                }            
                setLoading(false)        
                setErr(<h2 style={{color:"white"}}>Mohon Maaf Sedang Dalam Perbaikan</h2>)
            })
        }

    }

    useEffect(() => {
        getNews()
    },[])

    return(
        <div className="bg-secondary">
            <SearchFc recive={getNews}/>
            <Container>
                <Row>
                    {!loading 
                     ? 
                     (news.map(article => {
                        return(
                            <Col className="col-lg-4 col-md-6 col-sm-12 mb-4" key={article.title}>                   
                                <Card className="text-start">
                                <Card.Img style={{height:"200px"}} variant="top" src={article.urlToImage} />
                                <Card.Body>
                                    <Card.Title className=" mb-3">{article.title}</Card.Title>                        
                                    <Card.Subtitle className="mb-2 text-muted ">{article.author}</Card.Subtitle>
                                    <Card.Subtitle className="text-muted  mb-2">{article.publishedAt}</Card.Subtitle>
                                    <Card.Text>{article.description}</Card.Text>
                                    <Button 
                                    style={{backgroundColor:"dodgerblue",color:"white",padding:"10px", borderRadius:"5px", textDecoration:"none"}} 
                                    href={article.url} target="_blank"
                                    >Lanjutkan Membaca</Button>
                                </Card.Body>
                                </Card>
                            </Col>  
                        )                
                    }) 
                    )
                    :
                    (<Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={3000}/>)
                    }
                    {err}
                </Row>
            </Container>
        </div>
    )
        
    
}

export default NewsFc;