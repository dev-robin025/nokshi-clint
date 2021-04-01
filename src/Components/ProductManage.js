import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Spinner from './Spinner';
import ManagerTable from './ManagerTable';

const ProductManage = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch("https://nokshi.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="bg-info col-md-9" style={{ height: '100vh' }}>
            <Container>
                <h4 className="p-3">Manage Product :</h4>
                <Table striped bordered hover variant="light" responsive>
                    <thead>
                        <tr className="text-center">
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product != null ? product.map(item => <ManagerTable data={item} key={item._id} />) : <Spinner />
                        }
                    </tbody>
                </Table>
                <h5 className="text-center">You have {product?.length} products in your collection.</h5>
            </Container>
        </div>
    );
};

export default ProductManage;