import React, { Component } from 'react';
import api from '../../services/api'

//import './styles.css';

export default class Main extends Component{
state={
    products:[],
    productInfo:{},
    page: 1,
};

    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async (page=1)=> {
        //if(page==1)
            const response = await api.get('/products?page='+page);
       // else
         //   const response = await api.get('/products?page=${page}');
        
        const {docs,...productInfo}=response.data;
        console.log(productInfo);
        this.setState({products:docs, productInfo, page})
        //console.log(response.data.docs);
    };

    nextPage=()=>{
        const {page,productInfo}=this.state;
        
        console.log(page);
        console.log(productInfo);
        if(page==productInfo.pages) return;

        const pageNumber=page+1;

        this.loadProducts(pageNumber);
    }
    prevPage=()=>{
        const {page,productInfo}=this.state;

        console.log(page);
        console.log(productInfo);
        if(page==1) return;

        const pageNumber=page- 1;

        this.loadProducts(pageNumber);
    }

    render(){
        const{ products } = this.state;
            // Botar styles no codigo....
            // fazer no estilo do sysdam.....
        return(
            <div className='product-list'>
                {products.map(product=>(
                    
                    <article key={product._id}>
                        <strong>{product.title}</strong>   
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                    ))}
                <div className='actions'>
                    <button onClick={this.prevPage}>Anterior</button>

                    <button onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    };
}