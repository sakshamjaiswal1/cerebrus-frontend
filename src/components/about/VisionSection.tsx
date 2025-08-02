const VisionData = [
  {
    id: "BIue9809yf",
    img: "/about_img_1.svg"
  },
  {
    id: "BIue9809yf",
    img: "/about_img_2.svg"
  },
  {
    id: "BIue9809yf",
    img: "/about_img_3.svg"
  }
]

const VisionSection = () => {
  return (
    <section className="w-full">

      {VisionData.map((item, idx) => (
        <div key={item.id + idx}>
          <img src={item.img} alt={item.id} className="w-full object-contain mb-10" />
        </div>
      ))}

    </section>
  )
}

export default VisionSection