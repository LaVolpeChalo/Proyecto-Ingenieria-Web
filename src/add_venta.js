class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      Efectivo: true,
      Tarjeta: false,
      numberoDeProductos: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      
      <form>
        <img src="./img/ropa.webp" alt="foto_ropa" class="bg-danger bg-gradient d-inline-blok rounded-circle mb-3 " width="100" height="100"></img>
        <a href="#"><h3 class="text-capitalize">Subir foto</h3></a>
        <label>
          Nombre:
          <input
            type="text" value={this.state.value} />
        <br />
          Efectivo:
          <input
            name="Efectivo "
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
          <p></p>
          Tarjeta: 
          <input
            name="Tarjeta "
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />  
         
        </label>
        <br />
        <label>
          Numbero de productos:<p></p>
          <input
            name="numberoDeProductos"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <button >
          Subir producto
        </button>
      </form>
      
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Formulario />);



