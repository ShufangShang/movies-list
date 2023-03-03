import React, {Component} from 'react';
import '../css/Movies.css';
import Movie from './Movie';

class Movies extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-movies">
          <div className="row">
            <Movie image="..//images//hard-boiled.jpg" title="Hard Boiled" description="Hard Boiled is a 1992 Hong Kong action thriller film written by Barry Wong and directed by John Woo. It stars Chow Yun-fat as Inspector “Tequila” Yuen, Tony Leung Chiu-Wai as Alan, an undercover cop, and Anthony Wong as Johnny Wong, a leader of the criminal triads." year="1992" genre="Action Genre"/>
            <Movie image="..//images//theflightofdragons.jpg" title="The Flight of Dragons" description="The Flight of Dragons is animated fantasy film produced and directed by Jules Bass and Arthur Rankin, Jr. loosely combining the speculative natural history book." year="1982" genre="animation Genre"/>
            <Movie image="..//images//charlesangels.jpg" title="Charlie’s Angels" description="A team of female private agents, popularly known as Charlie’s Angels, are tasked by their mysterious boss to expose an international conspiracy to weaponise an energy conservation device." year="2000" genre="Comedy Genre"/>
            <Movie image="..//images//oceaneleven.jpeg" title="Ocean’s Eleven" description="Danny Ocean, a gangster, assembles a group of eleven people in an effort to steal money from three popular casinos in Las Vegas owned by his rival, Terry Benedict." year="2001" genre="CRIME GENRE"/>
            <Movie image="..//images//kids.jpg" title="Kids" description="Amoral teen Telly (Leo Fitzpatrick) has made it his goal to sleep with as many virgin girls as possible — but he doesn’t tell them that he’s HIV positive. While on the hunt for his latest conquest, Telly and his best friend, Casper (Justin Pierce), smoke pot and steal from shops around New York. Meanwhile, Jenny (Chloë Sevigny), one of Telly’s early victims, makes it her mission to save other girls from him. But before she has a chance to confront him at a party, everything goes horribly wrong." year="1995" genre="DRAMA GENRE"/>
            <Movie image="..//images//harrypotter6.jpg" title="Harry PotterMovie 6" description="Harry Potter is a British-American film series based on the eponymous novels by author J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher’s Stone and culminating with Harry Potter and the Deathly Hallows – Part 2." year="2001" genre="Fantasy Genre"/>
          </div>
        </div>
        <div className="add">
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
} 


export default Movies;