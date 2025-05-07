export const fetchBusiness = async () => {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch(
    `${config.public.apiBase}/api/business`
  );

  if (error.value) {
    console.error("Failed to fetch businesses:", error.value);
    return [
      {
        _id: "681b71f951629febac9341c3",
        name: "Tef's Photobooth & Party Cart",
        description:
          "Capture the fun with 360 video booths, photo booths, party food carts, and entertainers for all occasions.",
        img: "assets/tefs.png",
        __v: 0,
        url: "tefs-photobooth",
      },
      {
        _id: "681b72d8b784bc54c96a1765",
        name: "N.B. Rivera Land Surveying",
        description:
          "Professional engineering and land surveying services for residential, commercial, and development projects.",
        img: "assets/nbr.jpg",
        __v: 0,
        url: "nbrivera-land-surveying",
      },
      {
        _id: "681b72f6b784bc54c96a1767",
        name: "DC Photo Studio",
        description:
          "A self-photo studio where you can take professional-quality shots in a cozy, private setting.",
        img: "assets/dcphotostudio.jpg",
        __v: 0,
        url: "dc-photo-studio",
      },
      {
        _id: "681b730eb784bc54c96a1769",
        name: "Lolo Boyong's Kantina",
        description:
          "Home-cooked Filipino meals available for dine-in, takeout, delivery, and full-service catering.",
        img: "assets/loloboyongs.jpg",
        __v: 0,
        url: "lolo-boyongs-kantina",
      },
    ];
  }

  return data;
};
