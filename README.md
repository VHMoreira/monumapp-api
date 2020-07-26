<h1 align="center"> Monumapp </h1>

<p align="justify"> 
    The Monumapp API will be responsable to send data to Manumapp application consume.
</p>

<p align="center"> 
    <img src="https://img.shields.io/github/issues/VHMoreira/monumapp-api"/>
    <img src="https://img.shields.io/github/forks/VHMoreira/monumapp-api"/>
    <img src="https://img.shields.io/github/stars/VHMoreira/monumapp-api"/>
    <img src="https://img.shields.io/github/license/VHMoreira/monumapp-api"/>
    <img src="https://img.shields.io/static/v1?label=Status&message=Development&color=yellow"/>
</p>

## Sumary

- [Sumary](#sumary)
- [Resources](#resources)
- [Exemple](#exemple)
- [Requirements](#requirements)
- [Run Server](#run-server)
- [Authors](#authors)
- [License](#license)

## Resources

- Get monument's information

## Exemple

On Development environment:

> http://localhost:3333/monuments/:id

Return:

```
{
    "imgs_urls": [
        "http://exemple.com/assets/img1.jpg",
        "http://exemple.com/assets/img2.jpg",
        "http://exemple.com/assets/img3.jpg",
        ...
    ],
    "name": "Monument Name",
    "neighborhood": "Monument Neighborhood",
    "information": {
        "description": "That's the monument's description, here will be information  about this monument nowadays."
        "open_hours": [
            {
                "day": "Monday",
                "open": "08h",
                "close": "16h"
            },
            ...
        ],
        "enter_price": 6.50
    },
    "history": {
        "fundation_date": "18/05/1850",
        "origin": "A text about this monument origin, and why it was founded",
        "important_facts": "Monuments important fact's in history"
    }
}
```

## Requirements

- [Node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/)

## Run Server

1 - Clone this repository to your local storage

> git clone https://github.com/VHMoreira/monumapp-api.git

2 - Using terminal, enter in this repository folder

> cd monumapp-api/

3 - Inside momumapp-api folder, install dependencies

> yarn

4 - After dependencies installation, run sever

> yarn dev:server

## Authors

- [Vitor Henrique]("https://github.com/VHMoreira")
- [Alvaro Somensi]("https://github.com/alvarosomensi")

## License

The [MIT License]() (MIT)

Copyright :copyright: 2020 - Monumapp