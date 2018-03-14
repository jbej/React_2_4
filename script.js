var movies = [
    {
        id: 1,
        title: '7 rzeczy o których nie wiecie o facetach',
        desc: 'komedia romantyczna',
        img: 'images/img_1.jpg'
    },
    {
        id: 2,
        title: 'Zwierzogród',
        desc: 'bajka',
        img: 'images/img_2.jpg'
    },
    {
        id: 3,
        title: 'Służąca',
        desc: 'thriller',
        img: 'images/img_3.jpg'
    },
    {
        id: 4,
        title: 'Sprawiedliwy',
        desc: 'obyczyjowy',
        img: 'images/img_4.jpg'
    },
    {
        id: 5,
        title: 'Moja matka',
        desc: 'obyczajowy',
        img: 'images/img_5.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render : function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDesc, {desc: this.props.movie.desc}),
                React.createElement(MovieImage, {img: this.props.movie.img})
            )   
        )
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render : function() {
        return React.createElement('p', {}, this.props.desc)
    }
});

var MovieTitle = React.createClass({
    propTypes: {
       title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieImage = React.createClass({
    propTypes: {
       img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {src: this.props.img})
    }
});

var moviesElements = movies.map(function(movie) {
    return (
        React.createElement(Movie, {key:movie.id, movie: movie})
    )
});

var MovieList = React.createClass({
   
    render: function() {
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);
        

ReactDOM.render(element, document.getElementById('app'));