export const fetchBusiness = async () => {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch(
    `${config.public.apiBase}/api/business`
  );

  if (error.value) {
    console.error("Failed to fetch businesses:", error.value);
  }

  return data;
};
