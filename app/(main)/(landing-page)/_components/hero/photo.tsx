import Image from "next/image";

const Photo = () => {
  return (
    <div className="columns-2 sm:columns-3 gap-4">
      <div className="relative h-40 mb-4">
        <Image
          alt="gallery photo 2"
          src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-sm object-cover"
        />
      </div>
      <div className="relative h-80 mb-4 sm:mb-0">
        <Image
          alt="gallery photo 4"
          src="https://plus.unsplash.com/premium_photo-1661766444310-014137fc422c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVudG9yaW5nfGVufDB8fDB8fHww"
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-sm object-cover object-[-16px] sm:object-center"
        />
      </div>
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="gallery photo 3"
          src="https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-sm object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative h-40 mb-4 sm:mb-0">
        <Image
          alt="gallery photo 6"
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D"
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-sm object-cover"
        />
      </div>
      <div className="relative h-40 mb-4">
        <Image
          alt="gallery photo 1"
          src="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-sm object-cover"
        />
      </div>
      <div className="relative h-80">
        <Image
          alt="gallery photo 5"
          src="https://images.unsplash.com/photo-1555432783-9aed44ab60a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG9ubGluZSUyMGNsYXNzfGVufDB8fDB8fHww"
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default Photo;
