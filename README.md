# fotorama-react-wrapper

> A simple reactjs wrapper for [fotorama.io](http://fotorama.io/)!

### Features:

- Tiny size! _~waow!_

<img src="https://ucarecdn.com/b0195d14-8b84-426d-a91f-d398c1839392/soSmol.png">

- Vanilla JS CDN dependency imports! _~no way!_
- Easy to use! _~what a dream come true!_

## Install

> **npm** install fotorama-react-wrapper  
> _or_  
> **yarn** add fotorama-react-wrapper

## Usage

**(Recommended)** To add dependencies for Fotorama via vanilla js, add the `imp` property

```JSX
...
import Fotorama from 'fotorama-react-wrapper'

const App = () => (
	<div className="App">
		<Fotorama imp >
			<img src="https://s.fotorama.io/1.jpg" />
			<img src="https://s.fotorama.io/2.jpg" />
			<img src="https://s.fotorama.io/3.jpg" />
		</ Fotorama >
	</div>
)
```

If you are manually adding dependencies for fotorama (See: [Fotorama Set-Up Pg](http://fotorama.io/#set-up) )

```JSX
...
import Fotorama from 'fotorama-react-wrapper'

const App = () => (
	<div className="App" >
		<Fotorama >
			<img src="https://s.fotorama.io/1.jpg" />
			<img src="https://s.fotorama.io/2.jpg" />
			<img src="https://s.fotorama.io/3.jpg" />
		</ Fotorama >
	</div>
)
```

## Customization

> See: [Fotorama.io Customization Section](http://fotorama.io/customize/)

```JSX
...
import Fotorama from 'fotorama-react-wrapper'

const App = () => (
	<div className="App">
		<Fotorama
		   data-allowfullscreen="true"
		   data-nav="thumbs"
		   data-width="800"
		   data-height="600" >
			<img src="https://s.fotorama.io/1.jpg" />
			<img src="https://s.fotorama.io/2.jpg" />
			<img src="https://s.fotorama.io/3.jpg" />
		</Fotorama >
	</div>
)
```
