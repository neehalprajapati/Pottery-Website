import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Services.css';
import img1 from '../../assets/img/image1.jpg';
import img2 from '../../assets/img/image2.jpg';
import img3 from '../../assets/img/image3.jpg';
import img4 from '../../assets/img/image4.jpg';
import img5 from '../../assets/img/image5.jpg';
import img6 from '../../assets/img/image6.jpg';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    email: '',
    phone: ''
  });
  const [quantity, setQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Sample product data with categories
  const products = {
    pots: [
      {
        id: 1,
        name: 'Clay Flower Pot',
        price: 150,
        image: img1,
        features: [
          'Handcrafted from natural clay',
          'Excellent drainage system',
          'Perfect for indoor plants',
          '5-inch diameter',
          'Unpainted natural finish'
        ],
        description: 'Beautiful terracotta pot ideal for small plants and succulents. Made with traditional pottery techniques that ensure durability and breathability for healthy plant growth.'
      },
      {
        id: 2,
        name: 'Terracotta Planter',
        price: 200,
        image: img2,
        features: [
          'Medium-sized planter',
          'Rustic finish',
          'Includes drainage hole',
          '8-inch diameter',
          'Weather-resistant'
        ],
        description: 'Classic terracotta planter suitable for both indoor and outdoor use. The porous material helps regulate soil moisture.'
      }
    ],
    diya: [
      {
        id: 3,
        name: 'Traditional Diya',
        price: 50,
        image: img3,
        features: [
          'Hand-pressed clay',
          'Traditional design',
          'Set of 5 pieces',
          'Natural finish',
          'Perfect for festivals'
        ],
        description: 'Authentic clay diyas for your festive celebrations. These eco-friendly diyas provide the perfect traditional ambiance.'
      }
    ],
    matka: [
      {
        id: 4,
        name: 'Water Matka',
        price: 300,
        image: img4,
        features: [
          'Natural cooling properties',
          '5-liter capacity',
          'Traditional design',
          'Handcrafted',
          'Chemical-free'
        ],
        description: 'Traditional water matka that naturally cools water. Perfect for summer months and adds rustic charm to your home.'
      },
      {
        id: 5,
        name: 'Water Matka',
        price: 300,
        image: img4,
        features: [
          'Natural cooling properties',
          '5-liter capacity',
          'Traditional design',
          'Handcrafted',
          'Chemical-free'
        ],
        description: 'Traditional water matka that naturally cools water. Perfect for summer months and adds rustic charm to your home.'
      },
      {
        id: 6,
        name: 'Water Matka',
        price: 300,
        image: img4,
        features: [
          'Natural cooling properties',
          '5-liter capacity',
          'Traditional design',
          'Handcrafted',
          'Chemical-free'
        ],
        description: 'Traditional water matka that naturally cools water. Perfect for summer months and adds rustic charm to your home.'
      }
    ],
    handi: [
      {
        id: 7,
        name: 'Cooking Handi',
        price: 400,
        image: img5,
        features: [
          'Perfect for slow cooking',
          '2-liter capacity',
          'Heat-resistant',
          'Traditional design',
          'Healthy cooking'
        ],
        description: 'Authentic clay handi for traditional cooking methods. Enhances flavor and retains nutrients in your food.'
      },
      {
        id: 8,
        name: 'Cooking Handi',
        price: 400,
        image: img5,
        features: [
          'Perfect for slow cooking',
          '2-liter capacity',
          'Heat-resistant',
          'Traditional design',
          'Healthy cooking'
        ],
        description: 'Authentic clay handi for traditional cooking methods. Enhances flavor and retains nutrients in your food.'
      },
      {
        id: 9,
        name: 'Cooking Handi',
        price: 400,
        image: img5,
        features: [
          'Perfect for slow cooking',
          '2-liter capacity',
          'Heat-resistant',
          'Traditional design',
          'Healthy cooking'
        ],
        description: 'Authentic clay handi for traditional cooking methods. Enhances flavor and retains nutrients in your food.'
      },

    ]
  };

  // Filter products based on search query
  const filteredProducts = Object.entries(products).reduce((acc, [category, items]) => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setOrderSuccess(false);
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setPaymentInfo({
      name: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      email: '',
      phone: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setOrderSuccess(true);
    }, 1500);
  };

  const totalPrice = selectedProduct ? (selectedProduct.price * quantity).toFixed(2) : 0;

  return (
    <div className="services-container container py-5">
      {/* Search Section */}
      <div className="search-section mb-5">
        <h1 className="text-center mb-4">Our Handcrafted Pottery Collection</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search products by name or category (pots, diya, matka, handi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary btn-lg" type="button">
                <i className="bi bi-search"></i> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      {Object.entries(filteredProducts).map(([category, items]) => (
        <div key={category} className="product-category mb-5">
          <h2 className="category-title text-capitalize mb-4">{category}</h2>
          <div className="row">
            {items.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100 product-card">
                  <img
                    src={product.image}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">₹{product.price}</p>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleShowModal(product)}
                    >
                      <i className="bi bi-eye-fill"></i> View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Product Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {orderSuccess ? (
            <div className="text-center py-4">
              <div className="success-icon mb-3">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
              </div>
              <h3>Order Placed Successfully!</h3>
              <p className="text-muted">Thank you for your purchase. Your order confirmation has been sent to {paymentInfo.email}.</p>
              <p>Order Details:</p>
              <ul className="list-unstyled">
                <li>Product: {selectedProduct?.name}</li>
                <li>Quantity: {quantity}</li>
                <li>Total: ₹{totalPrice}</li>
              </ul>
              <Button variant="success" onClick={handleCloseModal}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-6">
                <img
                  src={selectedProduct?.image}
                  className="img-fluid rounded mb-3"
                  alt={selectedProduct?.name}
                />
                <div className="product-highlights p-3 bg-light rounded">
                  <h5>Product Highlights:</h5>
                  <ul>
                    {selectedProduct?.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="price mb-3">₹{selectedProduct?.price} <small className="text-muted">per piece</small></h4>
                <p className="description">{selectedProduct?.description}</p>

                <Form onSubmit={handleCheckout}>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      style={{ maxWidth: '100px' }}
                    />
                  </Form.Group>

                  <div className="payment-form p-3 bg-light rounded">
                    <h5 className="mb-3">Order Summary</h5>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal ({quantity} items):</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Shipping:</span>
                      <span>FREE</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between fw-bold">
                      <span>Total:</span>
                      <span>₹{totalPrice}</span>
                    </div>

                    <h5 className="mt-4 mb-3">Payment Information</h5>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={paymentInfo.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={paymentInfo.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={paymentInfo.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </Form.Group>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                          type="text"
                          name="expiry"
                          value={paymentInfo.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" type="submit" size="lg">
                      <i className="bi bi-lock-fill"></i> Pay ₹{totalPrice} Now
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Services;

