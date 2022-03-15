import Image from "next/image"

function NotFound() {
  return (
    <div className="mx-auto my-16 max-w-xs">
      <Image
        src="/404.png"
        alt="Error Page 404"
        width={1271}
        height={774}
        layout="responsive"
        objectFit="cover"
        priority={true}
      />
    </div>
  )
}

export default NotFound
