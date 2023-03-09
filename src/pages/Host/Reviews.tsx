import { BsStarFill } from 'react-icons/bs';
import reviewGraph from '../../img/reviewGraph.png';

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      name: 'Sarah',
      date: 'Mar 5, 2031',
      text: "The StarCruiser is seriously awesome for exploration. With all the cool safety features and comfy amenities, I had a blast exploring new places. If you're an adventurer looking for an amazing exploration experience, the StarCruiser is the way to go!",
    },
    {
      rating: 5,
      name: 'Bob',
      date: 'Feb 16, 2031',
      text: 'Unforgettable luxury experience. The speed, comfort, and advanced safety features of the Nimbus flying car exceeded my expectations. Highly recommended!',
    },
  ];

  const reviewEls = reviews.map((review) => (
    <div className="text-black border-b border-solid border-b-primary pb-5 mb-5 last:border-none last:mb-0 last:pb-0">
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <BsStarFill className="text-[#FF8C38]" key={i} />
        ))}
      </div>
      <div className="flex gap-3 items-center mb-3">
        <h4 className="font-bold ">{review.name}</h4>
        <p className="text-gray-800">{review.date}</p>
      </div>
      <p>{review.text}</p>
    </div>
  ));

  return (
    <div>
      <div className="flex gap-6 items-center mb-4">
        <h1 className="font-bold text-accent text-3xl mb-2">Your reviews</h1>
        <p>
          Last <span className="font-bold underline">30 days</span>
        </p>
      </div>
      <img
        className="md:w-2/3 lg:w-1/2 bg-secondary rounded-md p-4"
        src={reviewGraph}
      />
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">Reviews</h1>
        <h4 className="mb-4">
          Last <span className="font-bold underline">30 days</span>
        </h4>
        <div className="bg-secondary rounded-md px-5 py-4 mb-5">
          {reviewEls}
        </div>
      </div>
    </div>
  );
}
