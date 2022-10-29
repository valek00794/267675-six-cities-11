import { Offers } from '../../types/offers';
import PlaceCard from '../../components/place-card/place-card';

type OfferListProps = {
  offers: Offers;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}

function OfferList({ offers, setActiveCard }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          setActiveCard={setActiveCard}
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default OfferList;