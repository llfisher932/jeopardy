const Title = ({ title }: { title: string }) => {
  return (
    <div className="bg-blue-950 flex text-center items-center justify-center text-4xl font-bold text-white p-3 h-[20%]">
      {title}
    </div>
  );
};

export default Title;
