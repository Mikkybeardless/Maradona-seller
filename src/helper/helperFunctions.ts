import dayjs from "dayjs";

export const formatDayJs = (date: dayjs.Dayjs | null): string => {
  if (!date) return "";
  const formatted = dayjs(date).toISOString();
  return formatted;
};

export function generateRandomNumber(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function formatPrice(price: number) {
  const internationalNumberFormat = new Intl.NumberFormat("en-US");
  return internationalNumberFormat.format(price);
}

export function appendArrayField(
  formData: FormData,
  key: string,
  value: unknown[],
  isFileArray = false
) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`The field "${key}" cannot be empty.`);
  }

  value.forEach((item) => {
    if (isFileArray) {
      if (item instanceof File) {
        formData.append(`${key}[]`, item);
      }
    } else {
      formData.append(`${key}[]`, String(item));
    }
  });
}

export function formatDateToYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const formatIsoString = (
  isoString: string
): { formattedDate: string; formattedTime: string } => {
  const date = new Date(isoString);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  // Format the date and time
  let formattedDate = date.toLocaleDateString("en-GB");
  // Format time with AM/PM
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Ensures AM/PM format
  });
  formattedDate = `${dayName}, ${formattedDate}`;

  return { formattedDate, formattedTime };
};

const allowedKeysMap: {
  [K in keyof ProductPayloadMap]: (keyof ProductPayloadMap[K])[];
} = {
  LAND: [
    "name",
    "description",
    "price",
    "category_id",
    "type",
    "land_type",
    "land_size",
    "accessibility",
    "topography",
    "fencing",
    "status",
    "media",
    "tags",
    "documents",
    "condition",
    "inventory",
  ],
  HOUSE: [
    "name",
    "description",
    "price",
    "category_id",
    "type",
    "house_type",
    "house_beds",
    "house_furnished",
    "house_condition",
    "house_size",
    "accessibility",
    "media",
    "tags",
    "documents",
    "inventory",
  ],
  CAR: [
    "name",
    "description",
    "price",
    "category_id",
    "type",
    "body_type",
    "engine_type",
    "mileage",
    "gear_type",
    "status",
    "media",
    "tags",
    "documents",
    "condition",
    "inventory",
  ],
} as const;

export function getProductShape(
  product: Extract<ProductDetails, { type: ProductType }>
): ProductPayloadMap[ProductType] {
  const allowedKeys = allowedKeysMap[product.type];

  const filtered = Object.fromEntries(
    Object.entries(product).filter(([key]) =>
      allowedKeys.includes(key as keyof ProductPayloadMap[ProductType])
    )
  ) as ProductPayloadMap[ProductType];

  return filtered;
}
