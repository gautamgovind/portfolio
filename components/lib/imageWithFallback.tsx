import React, { useState } from 'react';
import { buildSrc, Image } from "@imagekit/next";
import { defaultBgImage } from './assets';

export type ImageLoadingType = "eager" | "lazy";

type CommonImageProps = {
    src: string;
    alt: string;
    classname: string;
    loading?: ImageLoadingType;
}
type FillImageProps = {
    fill: true;
} & CommonImageProps;

type WithoutFillProps= {
    fill?: false;
    height:  number;
    width:  number;
} & CommonImageProps

type Props = FillImageProps | WithoutFillProps;

const ImageWithFallback = ({src, alt, classname="", loading="lazy", ...props}: Props) => {
    const [hasError, setHasError] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const fallbackSrc = "/defaultImg.jpg";

    const fallbackImgKitURL = buildSrc({
        urlEndpoint: defaultBgImage,
        src: fallbackSrc,
        transformation: [
            { quality: 8, blur: 90 },
            // {}, // Any other transformation you want to apply
        ],
      });

    const imageLayoutProps = ("fill" in props && props.fill ? {fill: true  as const } : {height: props.height, width: props.width})

  return (
        <Image
            src={hasError ? fallbackImgKitURL : src}
            alt={alt}
            className={classname}
            loading={loading}
            {...imageLayoutProps}
            style={showPlaceholder ? {
                backgroundImage: `url(${fallbackImgKitURL})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            } : {}}
            onLoad={() => setShowPlaceholder(false)}
            onError={(e) => {
                setHasError(true);
                e.currentTarget.onerror = null;
            }}
        />
  )
}

export default ImageWithFallback