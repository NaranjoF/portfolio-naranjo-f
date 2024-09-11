import { v4 as uuidv4 } from 'uuid';
import ItemCard from './itemCard';

type Props = {
  items: {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
  }[];
  lastElements: boolean;
};

export default function ItemSection({ items, lastElements }: Readonly<Props>) {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start">
      {items.map((item, index) => {
        if (index % 2) {
          return (
            <div
              key={uuidv4()}
              className="flex flex-col xl:flex-row justify-center items-start"
            >
              <div className="hidden xl:flex h-64 w-[0.5px] bg-gray-12" />
              <ItemCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconAlt={item.iconAlt}
                classToAdd="mb-6 xl:mb-0 xl:mx-14"
              />
              <div className="hidden xl:flex h-64 w-[0.5px] bg-gray-12" />
              <div className="xl:hidden h-[0.5px] w-full bg-gray-12 mb-6" />
            </div>
          );
        }

        return (
          <div
            key={uuidv4()}
            className="flex flex-col xl:flex-row justify-center items-start"
          >
            <ItemCard
              key={uuidv4()}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconAlt={item.iconAlt}
              classToAdd={
                index === 0 ? 'mb-6 xl:mb-0 xl:mr-14' : 'mb-6 xl:mb-0 xl:ml-14'
              }
            />
            <div
              className={`xl:hidden h-[0.5px] w-full bg-gray-12 mb-6 ${lastElements && index === items.length - 1 ? 'hidden' : ''}`}
            />
          </div>
        );
      })}
    </div>
  );
}
