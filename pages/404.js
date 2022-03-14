import Image from "next/image"
export default function Custom404() {
  return (
    <div className="mx-auto my-16 max-w-xs">
      <Image
        src="/images/404.png"
        alt="Cover"
        width={1271}
        height={774}
        layout="responsive"
        objectFit="cover"
        priority={true}
      />
    </div>
  )
}
