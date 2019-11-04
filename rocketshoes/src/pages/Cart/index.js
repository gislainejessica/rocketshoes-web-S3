import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles'
import { connect } from 'react-redux'
import * as CartActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux'



function Cart({cart, removeFromCart}) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th> PRODUTO </th>
            <th> QTD </th>
            <th> SUBTOTAL </th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
            <td>
              <img src={product.image} alt={product.title}/>
            </td>
            <td>
              <strong>{product.title}</strong>
              <span> {product.priceFormatted} </span>
            </td>
            <td>
              <div>
              <button>
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={product.amount}/>
              <button>
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
              </div>
              </td>
              <td>
                <strong>R$ 245,54</strong>
              </td>
              <td>
                <button type="button" onClick={()=>
                  removeFromCart(product.id) }>
                  <MdDelete size={20} color="#7159c1" />
                </button>
            </td>
          </tr>
          ))}
        </tbody>

      </ProductTable>
      <footer>
        <button type='button'>
          Finalizar Pedido
        </button>
        <Total>
            <span> TOTAL </span>
            <strong> R$ 5000,00 </strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
