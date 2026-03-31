<<<<<<< HEAD
=======
// src/pages/Menu.tsx
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
import { useMemo, useState, useEffect, type ImgHTMLAttributes } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MotionSection from "@/components/motion/Section";
import { fadeInUp, stagger, hoverLift } from "@/lib/motion";

<<<<<<< HEAD
import idliImg from "@/assets/menu/idli.png";
import masalaDosaImg from "@/assets/menu/masala-dosa.webp";
import pesarattuImg from "@/assets/menu/pesarattu-upma.jpg";
import vegMealsImg from "@/assets/menu/andhra-veg-meals.jpg";
import naatuKodiImg from "@/assets/menu/naatu-kodi-pulusu.webp";
import gonguraMuttonImg from "@/assets/menu/gongura-mutton-biryani.jpeg";
import chicken65Img from "@/assets/menu/chicken-65.jpg";
import gunturChickenImg from "@/assets/menu/guntur-chilli-chicken.webp";
import gonguraChickenImg from "@/assets/menu/gongura-chicken-biryani.JPG";
import fishFryImg from "@/assets/menu/rayalaseema-fish-fry.jpg";
import prawnsRoastImg from "@/assets/menu/prawns-roast.jpg";
import haleemImg from "@/assets/menu/haleem.jpg";
import malabarFishCurryImg from "@/assets/menu/malabar-fish-curry.jpg";
import potlamBiryaniImg from "@/assets/menu/potlam-biryani.jpg";
import chettinadChickenImg from "@/assets/menu/chettinad-chicken.jpeg";
import meduVadaImg from "@/assets/menu/medu-vada.webp";
import koliwadaPrawnsImg from "@/assets/menu/koliwada-prawns.jpg";
import gunpowderDosaImg from "@/assets/menu/gunpowder-dosa.jpg";
import filterCoffeeImg from "@/assets/menu/filter-coffee.jpg";
import payasamImg from "@/assets/menu/payasam.jpg";
import teaImg from "@/assets/menu/prakasham-special-tea.jpg";
import fallbackImg from "@/assets/menu/fallback.jpg";

=======
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
/* =========================
   Types
   ========================= */
type Category = "All" | "Breakfast" | "Lunch" | "Dinner" | "Specials";
type CollectionKey = "signature" | "starters" | "beverages";

type Dish = {
  id: string;
  name: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  desc: string;
  spicy?: boolean;
};

/* =========================
   Helpers
   ========================= */
<<<<<<< HEAD
const FALLBACK_IMG = fallbackImg;
=======
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop";
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6

function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
      }}
<<<<<<< HEAD
=======
      referrerPolicy="no-referrer"
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
      loading="lazy"
    />
  );
}

/* =========================
   Data
   ========================= */
<<<<<<< HEAD
=======
// Classic menu items (add/edit freely)
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
const DISHES: Dish[] = [
  // BREAKFAST
  {
    id: "bf-idli",
    name: "Steamed Idli (3)",
    price: 49,
    category: "Breakfast",
<<<<<<< HEAD
    image: idliImg,
=======
    image:
      "https://miro.medium.com/1*0UnpOe9J_NPbY4m5NmHdNA.png",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Soft rice cakes with coconut & tomato chutneys, ghee.",
  },
  {
    id: "bf-dosa",
    name: "Masala Dosa",
    price: 99,
    category: "Breakfast",
<<<<<<< HEAD
    image: masalaDosaImg,
=======
    image:
      "https://homecookingshow.in/wp-content/uploads/2025/02/ghee-karam-dosa-1-1024x576.webp",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Crispy dosa stuffed with spiced potato masala.",
  },
  {
    id: "bf-pesarattu",
    name: "Pesarattu & Upma",
    price: 149,
    category: "Breakfast",
<<<<<<< HEAD
    image: pesarattuImg,
=======
    image:
      "https://res.cloudinary.com/roundglass/image/upload/v1753187552/rg/collective/media/rg-food-in-upma-mla-pesarattu-rakesh-raghunathan-may2022-001-16x9-1753187551759.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Andhra green gram dosa with hot upma, ginger chutney.",
  },

  // LUNCH
  {
    id: "l-meals",
    name: "Andhra Veg Meals",
    price: 249,
    category: "Lunch",
<<<<<<< HEAD
    image: vegMealsImg,
=======
    image:
      "https://im.whatshot.in/img/2019/Jul/andhra-mess-cropped-1563960726.jpg?wp=1",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Multiple Veg Dishes",
  },
  {
    id: "l-natukodi",
    name: "Naatu Kodi Pulusu",
    price: 399,
    category: "Lunch",
<<<<<<< HEAD
    image: naatuKodiImg,
=======
    image:
      "https://images.slurrp.com/prod/articles/rp1vz7to7z.webp",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Country-chicken stew simmered with Andhra spices.",
    spicy: true,
  },
  {
    id: "l-gongura-bir",
    name: "Gongura Mutton Biryani",
    price: 499,
    category: "Lunch",
<<<<<<< HEAD
    image: gonguraMuttonImg,
=======
    image:
      "https://139384906.cdn6.editmysite.com/uploads/1/3/9/3/139384906/VIZADCI3TMTWSAVQIVHI75AM.jpeg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Signature biryani scented with sorrel leaves and ghee.",
    spicy: true,
  },

  // DINNER
  {
    id: "d-chicken65",
    name: "Chicken 65 (Andhra style)",
    price: 269,
    category: "Dinner",
<<<<<<< HEAD
    image: chicken65Img,
=======
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-swasthi.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Crispy fried chicken tossed with curry leaves & chillies.",
    spicy: true,
  },
  {
    id: "d-guntur-chicken",
    name: "Guntur Chilli Chicken",
    price: 199,
    category: "Dinner",
<<<<<<< HEAD
    image: gunturChickenImg,
=======
    image:
      "https://homecookingshow.in/wp-content/uploads/2025/04/Guntur-Chicken-Masala-819x1024.webp",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Fiery and addictive, finished with crushed chilli.",
    spicy: true,
  },
  {
    id: "d-gongura-chicken-bir",
    name: "Gongura Chicken Biryani",
    price: 349,
    category: "Dinner",
<<<<<<< HEAD
    image: gonguraChickenImg,
=======
    image:
      "https://images.hindustantimes.com/telugu/img/2022/12/14/960x540/Gongura_Chicken_Biryani_1671003873556_1671003883792_1671003883792.JPG",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Marinated chicken biryani with sorrel leaves & ghee.",
    spicy: true,
  },
  {
    id: "d-fish",
    name: "Rayalaseema Fish Fry",
    price: 299,
    category: "Dinner",
<<<<<<< HEAD
    image: fishFryImg,
=======
    image:
      "https://t3.ftcdn.net/jpg/02/81/77/56/360_F_281775659_jHOWgntwa6DmPBo0DC4bcEihmUzntIhS.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Seer fish marinated and pan-seared, lemon & onion.",
  },

  // SPECIALS
  {
    id: "s-prawn-roast",
    name: "Prawns Roast",
    price: 249,
    category: "Specials",
<<<<<<< HEAD
    image: prawnsRoastImg,
=======
    image:
      "https://images.picxy.com/cache/2020/11/30/5e846cbd0931f7d68d605e5f5caf4623.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Prawns with tasty special masalas speciality.",
    spicy: true,
  },
  {
    id: "s-gongura-bir",
    name: "Gongura Mutton Biryani",
    price: 499,
    category: "Specials",
<<<<<<< HEAD
    image: gonguraMuttonImg,
=======
    image:
      "https://139384906.cdn6.editmysite.com/uploads/1/3/9/3/139384906/VIZADCI3TMTWSAVQIVHI75AM.jpeg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Signature biryani scented with sorrel leaves and ghee.",
    spicy: true,
  },
  {
    id: "s-hyderabadi-haleem",
    name: "Weekend Haleem (Seasonal)",
    price: 149,
    category: "Specials",
<<<<<<< HEAD
    image: haleemImg,
    desc: "Slow-cooked with butter & meat, topped with fried onions.",
  },

=======
    image:
      "https://assets.epicurious.com/photos/5f8df5175c3aee57fc9820e4/1:1/w_3222,h_3222,c_limit/LambHaleem_HERO_RECIPE_101520_0816.jpg",
    desc: "Slow-cooked with butter & meat, topped with fried onions.",
  },

  // ====== Collection-only items (use these IDs in COLLECTION_IDS) ======
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
  // SIGNATURE
  {
    id: "c-malabar-fish-curry",
    name: "Malabar Fish Curry",
    price: 350,
    category: "Dinner",
<<<<<<< HEAD
    image: malabarFishCurryImg,
=======
    image:
      "https://www.nestleprofessional.in/sites/default/files/2022-07/Malabar-Fish-Curry.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Fresh catch in coconut curry with Kodampuli.",
  },
  {
    id: "c-potlam-biryani",
    name: "Potlam Biryani",
    price: 400,
    category: "Dinner",
<<<<<<< HEAD
    image: potlamBiryaniImg,
=======
    image:
      "https://img-cdn.publive.online/fit-in/1200x675/hospibuz/media/post_attachments/wp-content/uploads/2023/08/5_MLA-Potnam-biryani.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Fragrant basmati rice with tender mutton and saffron.",
  },
  {
    id: "c-chettinad-chicken",
    name: "Chettinad Chicken",
    price: 300,
    category: "Dinner",
<<<<<<< HEAD
    image: chettinadChickenImg,
=======
    image:
      "https://pompomcooks.com/wp-content/uploads/2021/02/DSC_2027.jpeg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Spicy Tamil specialty with roasted spices and curry leaves.",
    spicy: true,
  },

  // STARTERS
  {
    id: "c-medu-vada",
    name: "Medu Vada",
    price: 60,
    category: "Breakfast",
<<<<<<< HEAD
    image: meduVadaImg,
=======
    image:
      "https://talodfoods.com/cdn/shop/files/Meduvada-Creative_img.webp?v=1721647040&width=1500",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Crispy lentil donuts served with sambar and chutneys.",
  },
  {
    id: "c-koliwada-prawns",
    name: "Koliwada Prawns",
    price: 250,
    category: "Dinner",
<<<<<<< HEAD
    image: koliwadaPrawnsImg,
=======
    image:
      "https://headbangerskitchen.com/wp-content/uploads/2024/01/PRAWANSKOLIWADA-Horizontal.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Spicy battered prawns with curry leaf tempering.",
    spicy: true,
  },
  {
    id: "c-gunpowder-dosa",
    name: "Gunpowder Dosa",
    price: 149,
    category: "Breakfast",
<<<<<<< HEAD
    image: gunpowderDosaImg,
=======
    image:
      "https://img.freepik.com/premium-photo/south-indian-vegetarian-breakfast-idli-karam-podi-dosa-sambar-chutney-top-view_742418-360.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Crispy dosa with spicy gun powder and ghee.",
  },

  // BEVERAGES / DESSERTS
  {
    id: "c-filter-coffee",
    name: "Filter Coffee",
    price: 150,
    category: "Specials",
<<<<<<< HEAD
    image: filterCoffeeImg,
=======
    image:
      "https://5.imimg.com/data5/ECOM/Default/2023/10/355317396/IW/SD/NP/182872460/08-500x500.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Authentic South Indian coffee in a traditional tumbler.",
  },
  {
    id: "c-payasam",
    name: "Payasam",
    price: 199,
    category: "Specials",
<<<<<<< HEAD
    image: payasamImg,
=======
    image:
      "https://cookilicious.com/wp-content/uploads/2024/10/Instant-Pot-Kheer-1-scaled.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Variety of traditional sweet puddings.",
  },
  {
    id: "c-prakasham-special-tea",
    name: "Prakasham Special Tea",
    price: 80,
    category: "Specials",
<<<<<<< HEAD
    image: teaImg,
=======
    image:
      "https://www.cookclickndevour.com/wp-content/uploads/2018/10/ginger-tea-recipe-3.jpg",
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
    desc: "Soothing, ginger-infused tea.",
  },
];

/* =========================
   Collections (STRICT ID lists)
   ========================= */
const COLLECTION_LABEL: Record<CollectionKey, string> = {
  signature: "Signature Dishes",
  starters: "Traditional Starters",
  beverages: "Beverages & Desserts",
};

<<<<<<< HEAD
=======
// EXACTLY which dishes appear in each collection
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
const COLLECTION_IDS: Record<CollectionKey, string[]> = {
  signature: [
    "c-malabar-fish-curry",
    "c-potlam-biryani",
    "c-chettinad-chicken",
  ],
  starters: [
    "c-medu-vada",
    "c-koliwada-prawns",
    "c-gunpowder-dosa",
  ],
  beverages: [
    "c-filter-coffee",
    "c-payasam",
    "c-prakasham-special-tea",
  ],
};

/* =========================
   Page
   ========================= */
const CATS: Category[] = ["All", "Breakfast", "Lunch", "Dinner", "Specials"];

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

<<<<<<< HEAD
=======
  // read ?cat=… to switch into Collections mode
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
  const params = new URLSearchParams(location.search);
  const deepCat = (params.get("cat") as CollectionKey | null) ?? null;
  const inCollectionsMode = !!deepCat && deepCat in COLLECTION_LABEL;

<<<<<<< HEAD
  const [cat, setCat] = useState<Category>("All");

=======
  // classic category state (only used when NOT in collections mode)
  const [cat, setCat] = useState<Category>("All");

  // items for classic mode
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
  const classicItems = useMemo(
    () => (cat === "All" ? DISHES : DISHES.filter((d) => d.category === cat)),
    [cat]
  );

<<<<<<< HEAD
=======
  // items for collections mode (strict ID filter)
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
  const collectionItems = useMemo(() => {
    if (!inCollectionsMode || !deepCat) return [];
    const ids = COLLECTION_IDS[deepCat];
    const set = new Set(ids);
    return DISHES.filter((d) => set.has(d.id)).sort(
      (a, b) => ids.indexOf(a.id) - ids.indexOf(b.id)
    );
  }, [inCollectionsMode, deepCat]);

<<<<<<< HEAD
  useEffect(() => { }, [inCollectionsMode]);

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
=======
  // clear query if you later add UI to toggle out of collections (kept for future)
  useEffect(() => {}, [inCollectionsMode]);

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
      {/* Heading */}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
      <motion.h1
        variants={fadeInUp(0)}
        className="text-4xl md:text-5xl font-extrabold text-amber-400"
      >
        {inCollectionsMode ? COLLECTION_LABEL[deepCat as CollectionKey] : "Menu"}
      </motion.h1>

      <motion.p variants={fadeInUp(0.05)} className="mt-3 text-white/70">
        {inCollectionsMode
          ? "Curated selection from this collection."
          : "Our curated South Indian selection."}
      </motion.p>

<<<<<<< HEAD
=======
      {/* Category chips (classic mode only) */}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
      {!inCollectionsMode && (
        <motion.div
          variants={stagger(0.06, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {CATS.map((c) => (
            <motion.button
              key={c}
              variants={fadeInUp(0)}
              onClick={() => setCat(c)}
<<<<<<< HEAD
              className={`rounded-full px-4 py-2 text-sm transition ${cat === c
                  ? "bg-amber-400 text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
                }`}
=======
              className={`rounded-full px-4 py-2 text-sm transition ${
                cat === c ? "bg-amber-400 text-black" : "bg-white/5 text-white hover:bg-white/10"
              }`}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
              {...hoverLift}
            >
              {c}
            </motion.button>
          ))}
        </motion.div>
      )}

<<<<<<< HEAD
=======
      {/* Grid */}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
      <motion.div
        variants={stagger(0.07, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {(inCollectionsMode ? collectionItems : classicItems).map((d, i) => (
          <motion.article
            key={d.id}
            variants={fadeInUp(i * 0.05, 16)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            whileHover={hoverLift.whileHover}
            whileTap={hoverLift.whileTap}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-amber-300/60"
          >
            <ImageWithFallback
              src={d.image}
              alt={d.name}
              className="h-44 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{d.name}</h3>
                <span className="shrink-0 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-bold text-black">
                  ₹{d.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">{d.desc}</p>
              <div className="mt-3 flex items-center gap-2 text-[11px]">
                <span className="rounded-full bg-white/10 px-2 py-1">
                  {d.category}
                </span>
                {d.spicy && (
                  <span className="rounded-full bg-red-500/20 px-2 py-1">
                    🌶 Spicy
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

<<<<<<< HEAD
=======
      {/* Empty state (collections) */}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
      {inCollectionsMode && collectionItems.length === 0 && (
        <motion.p variants={fadeInUp(0.1)} className="mt-8 text-white/60">
          No dishes yet in this collection.
        </motion.p>
      )}

<<<<<<< HEAD
=======
      {/* Back to main menu (only in collections mode) */}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
      {inCollectionsMode && (
        <motion.div variants={fadeInUp(0.1)} className="mt-10">
          <button
            onClick={() => navigate("/menu", { replace: true })}
            className="rounded-full bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm"
          >
            ← Back to full menu
          </button>
        </motion.div>
      )}
    </MotionSection>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
