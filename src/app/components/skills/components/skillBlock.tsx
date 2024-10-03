import SkillItem from './skillItem';

type Props = {
  blockTitle: string;
  blockItems: {
    name: string;
    logo: string;
    logoAlt: string;
    link: string;
  }[];
  cols: string;
};

export default function SkillBlock({
  blockItems,
  blockTitle,
  cols,
}: Readonly<Props>) {
  return (
    <div className="flex flex-col justify-center items-center px-2 xl:p-0">
      <p className="text-xl 3xl:text-2xl pb-3 text-center">{blockTitle}</p>

      <div
        className={`grid ${cols} gap-y-2 my-3 md:m-0 md:flex justify-center items-center flex-row`}
      >
        {blockItems.map(item => (
          <SkillItem
            itemLogo={item.logo}
            itemLogoAlt={item.logoAlt}
            itemName={item.name}
            link={item.link}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
}
