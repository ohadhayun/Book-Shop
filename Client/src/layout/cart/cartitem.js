

function cardMap(array) {
    const produtsMap = array.map((product, index) => {
        return (
            <Row key={index} className="underLine" style={{ display: "flex", justifyContent: "center" }}>
                <Col md={2}>
                    <Image style={{ maxWidth: "9rem", marginBottom: "20px" }} src={product.image} rounded />
                </Col>
                <Col size={1}>
                    <ul>
                        <li>
                            <span className="writerName">{product.bookName}</span><span> by {product.author}</span>
                        </li>
                        <li className={product.stock === "In Stock" ? 'stock' : 'outStock'}>{product.stock}</li>
                        <li><StarShow star={product.rating} /></li>
                        <li><span style={{ fontSize: "20px" }}>Price: {product.price}$</span></li>
                        {/* <li> <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={ }
                            InputProps={{ inputProps: { min: 1, max: 10 } }}
                            variant="outlined"
                        /></li> */}
                        <li> <Button onClick={() => removeItemFromArray(product.id)} variant="outline-danger">Remove</Button>{' '}</li>
                    </ul>

                </Col>
            </Row>
        );
    });
    return produtsMap;
}
export default cardMap(array);