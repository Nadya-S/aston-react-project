import BackButton from "../BackButton/BackButton";
import "./Card.css";

const Card = ({ card }) => {
  console.log("card", card);

  if (card) {
    return (
      <section className="card">
        <div className="card__image_container">
          <img
            srcSet={`${card.poster.previewUrl}?w=161&fit=crop&auto=format&dpr=2 1.5x`}
            src={`${card.poster.previewUrl}?w=161&fit=crop&auto=format`}
            alt={card.name}
            loading="lazy"
          />
        </div>
        <div className="card__description_container">
          <div className="card__title_container">
            <h2 className="card__title">
              {card.name} ({card.year})
            </h2>
            <BackButton />
          </div>

          <h3 className="card__eng-title">
            {card.alternativeName} ({card.ageRating}+)
          </h3>
          <p className="card__description">{card.description}</p>
          <div className="card__about">
            <h3>Рейтинг</h3>
            <p>
              KP: {card.rating.kp}, IMDB: {card.rating.imdb}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default Card;
