import useMovieStore from "../../store/store";

interface Props {
  onClose: () => void; // Callback to close the modal
}

const CartModal = ({ onClose }: Props) => {
  const { orderedMovies, addToCart, removeFromCart } = useMovieStore();

  const totalPrice = orderedMovies.reduce((total, item) => {
    const subtotal = item.price * item.quantity;
    return total + subtotal;
  }, 0);

  return (
    <>
      <div
        className="modal-backdrop"
        style={{ backgroundColor: "rgba(17, 17, 17, 0.7)", zIndex: 1040 }}
      ></div>
      <div
        className="modal show"
        tabIndex={-1}
        role="dialog"
        style={{ display: "block", zIndex: 1050 }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ minHeight: "80vh" }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#087f5b",
              color: "#ffffff",
              fontSize: "1.2rem",
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" style={{ fontSize: "1.5rem" }}>
                Your Cart
              </h5>
            </div>
            <div
              className="modal-body"
              style={{ maxHeight: "60vh", overflowY: "auto" }}
            >
              <div className="row mb-2">
                <div className="col">Title</div>
                <div className="col">Amount</div>
                <div className="col">Price</div>
                <div className="col">Actions</div>
              </div>
              {orderedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="row mb-2"
                  style={{
                    background: "#0d9d7a",
                    borderRadius: 5,
                    padding: 10,
                  }}
                >
                  <div className="col">{movie.title}</div>
                  <div className="col">{movie.quantity}x</div>
                  <div className="col">
                    ${(movie.quantity * movie.price).toFixed(2)}
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(movie.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => addToCart(movie)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div>Total: ${totalPrice.toFixed(2)}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
