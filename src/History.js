const min = 1,
  max = 5;
const random = () => (Math.random() * (max - min) + min).toFixed(1);
export const History = [
    {
      id: 0,
      name: "Subway",
      rating: random(),
      average_cost: 350,
      average_time: 41,
      cuisines: ["Healthy Food", " Salads", " Snacks", " Desserts", " Beverages"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sdipu3xigqafezlopx03",
      veg: false,
      promoted: true,
      items: [
        {
          id: 1,
          category: "Recommended",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: false,
          best_seller: false,
        },
        {
          id: 2,
          category: "Recommended",
          name: "Wednesday Bucket",
          price: 699.05,
          description:
            "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 3,
          category: "Recommended",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 4,
          category: "Recommended",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 5,
          category: "Recommended",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 6,
          category: "Recommended",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 7,
          category: "Recommended",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: false,
        },
        {
          id: 8,
          category: "Recommended",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 9,
          category: "Recommended",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 10,
          category: "Recommended",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 11,
          category: "Recommended",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 12,
          category: "Recommended",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 13,
          category: "Recommended",
          name: "Bucket for Two",
          price: 599.05,
          description: "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 14,
          category: "Recommended",
          name: "Smoky Grilled Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: true,
        },
        {
          id: 15,
          category: "Recommended",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: true,
        },
        {
          id: 16,
          category: "Recommended",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description: "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: true,
        },
        {
          id: 17,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: true,
          best_seller: true,
        },
        {
          id: 18,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Bucket",
          price: 699.05,
          description: "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 19,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 20,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 21,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 22,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 23,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: true,
        },
        {
          id: 24,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "hhttps://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 25,
          category: "STAY HOME SPECIALS",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 26,
          category: "STAY HOME SPECIALS",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 27,
          category: "STAY HOME SPECIALS",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 28,
          category: "STAY HOME SPECIALS",
          name: "Bucket for Two",
          price: 599.05,
          description:
            "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 29,
          category: "STAY HOME SPECIALS",
          name: "Smoky Grilled Biryani Combo",
          price: 699.05,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: false,
        },
        {
          id: 30,
          category: "STAY HOME SPECIALS",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: false,
        },
        {
          id: 31,
          category: "STAY HOME SPECIALS",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description:
            "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: false,
        },
        {
          id: 32,
          category: "BIG SAVE COMBOS",
          name: "5 pc Leg Piece Bucket Meal",
          price: 619.05,
          description:
            "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mvv9ssgaeu4qcykmcvc7",
          veg: false,
          best_seller: false,
        },
        {
          id: 33,
          category: "BIG SAVE COMBOS",
          name: "Ultimate Savings Bucket",
          price: 699.05,
          description:
            "Save 35% on our signature bucket of 4pc Hot & crispy chicken, 6 Wings, 4 strips, 3 Dips & a Pepsi PET [serves 2-3 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/tajxkns3jgdhfjochdke",
          veg: false,
          best_seller: false,
        },
        {
          id: 34,
          category: "BIG SAVE COMBOS",
          name: "Big 12 Bucket",
          price: 719.05,
          description:
            "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yqxxwbdxoaconjcyb7ka",
          veg: false,
          best_seller: false,
        },
        {
          id: 35,
          category: "BIG SAVE COMBOS",
          name: "8 pcs Hot & Crispy Chicken",
          price: 748.57,
          description:
            "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uspplszjphtrwqn1alef",
          veg: false,
          best_seller: false,
        },
        {
          id: 36,
          category: "BIG SAVE COMBOS",
          name: "6 pc Hot & Crispy Chicken",
          price: 619.05,
          description:
            "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ygv0a2rzffhnfgbfajz4",
          veg: false,
          best_seller: false,
        },
        {
          id: 37,
          category: "BIG SAVE COMBOS",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 38,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/t0ev2on1riwnzmmzin4t",
          veg: false,
          best_seller: false,
        },
        {
          id: 39,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with double portions of Popcorn & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sfb4moimirjyw3synieo",
          veg: false,
          best_seller: false,
        },
        {
          id: 40,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket-Large",
          price: 475.24,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fmratf6rgvdudecsu3ye",
          veg: false,
          best_seller: false,
        },
        {
          id: 41,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket",
          price: 229.52,
          description:
            "New Hyderabadi style Biryani rice served with 1 pc Hot & Crispy Chicken & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vdbrj7ouqpfbm8ekyh5o",
          veg: false,
          best_seller: false,
        },
        {
          id: 42,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 43,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 44,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Veg Biryani Bucket",
          price: 188.57,
          description:
            "New Hyderabadi style Biryani rice served with a rispy Veg Patty & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/owthzjdjtwqladefseoj",
          veg: true,
          best_seller: false,
        },
        {
          id: 45,
          category: "BURGERS",
          name: "Buddy Meal",
          price: 499.05,
          description:
            "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcblg2ctjjeswzc0lopk",
          veg: false,
          best_seller: false,
        },
        {
          id: 46,
          category: "BURGERS",
          name: "Chicken & Krispers Combo",
          price: 519.05,
          description:
            "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m038pslx2jfyqgdmlgch",
          veg: false,
          best_seller: false,
        },
        {
          id: 47,
          category: "BURGERS",
          name: "Classic Zinger Meal",
          price: 344.76,
          description:
            "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jvhlgdezs1zssu0awfa1",
          veg: false,
          best_seller: false,
        },
        {
          id: 48,
          category: "BURGERS",
          name: "Tandoori Zinger Burger",
          price: 199.05,
          description:
            "Chicken zinger with a delicious tandoori sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kp586okorqfweuvauhtv",
          veg: false,
          best_seller: true,
        },
        {
          id: 49,
          category: "BURGERS",
          name: "Classic Zinger",
          price: 189.52,
          description:
            "Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ee0rjmockusnolkgh6fl",
          veg: false,
          best_seller: true,
        },
        {
          id: 50,
          category: "BURGERS",
          name: "Veg-Non-Veg Krispers Combo",
          price: 368.57,
          description:
            "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/o3fbz2n9zczmnlrsecbj",
          veg: false,
          best_seller: false,
        },
        {
          id: 51,
          category: "BURGERS",
          name: "2 Chicken Krisper Burgers",
          price: 228.57,
          description:
            "2 delicious chicken value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ufzxglygurm6dowpbc2t",
          veg: false,
          best_seller: false,
        },
        {
          id: 52,
          category: "BURGERS",
          name: "2 Veg Krisper Burgers",
          price: 158.10,
          description:
            "2 delicious veg value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cvqb24o2vlkd967jzzas",
          veg: false,
          best_seller: false,
        },
        {
          id: 53,
          category: "SNACKS",
          name: "Mingles Bucket",
          price: 339.05,
          description:
            "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/udmgrvfuwd000kvvqrjf",
          veg: false,
          best_seller: true,
        },
        {
          id: 54,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 55,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 56,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 57,
          category: "SNACKS",
          name: "Chick'n Fries Solo Combo",
          price: 419.05,
          description:
            "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/juuygxqa8ujapiu3hpyr",
          veg: false,
          best_seller: false,
        },
        {
          id: 58,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 59,
          category: "SNACKS",
          name: "Chicken & Fries Bucket",
          price: 299.05,
          description:
            "Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pasdg6owucvi23hcp9eb",
          veg: false,
          best_seller: false,
        },
        {
          id: 60,
          category: "SNACKS",
          name: "4pcs Hot & Crispy Chicken",
          price: 428.57,
          description:
            "4 pcs of signature Hot & crispy chicken at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m7q813n17jh4nrhtt7ss",
          veg: false,
          best_seller: false,
        },
        {
          id: 61,
          category: "SNACKS",
          name: "Popcorn & Fries bucket",
          price: 319.05,
          description:
            "Large Chicken Popcorn with Med Fries - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/raq6sxtwfb9fvbd6bakq",
          veg: false,
          best_seller: false,
        },
        {
          id: 62,
          category: "SNACKS",
          name: "Large Popcorn",
          price: 228.57,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xwunbsyx5mjosb47pgpi",
          veg: false,
          best_seller: false,
        },
        {
          id: 63,
          category: "SNACKS",
          name: "Medium Popcorn",
          price: 164.76,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vq4hhfaphd4fam2kieqq",
          veg: false,
          best_seller: false,
        },
        {
          id: 64,
          category: "SNACKS",
          name: "Regular Popcorn",
          price: 115.24,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xzzsjnmakrosu2i5qatn",
          veg: false,
          best_seller: false,
        },
        {
          id: 65,
          category: "SIDES & BEVERAGES",
          name: "Coffee Mousse Cake",
          price: 128.57,
          description:
            "Coffee, chocolate, cakeàwhat's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb0kmlqdl0kjiri0qii9",
          veg: true,
          best_seller: false,
        },
        {
          id: 66,
          category: "SIDES & BEVERAGES",
          name: "Choco Mud Pie",
          price: 128.57,
          description:
            "Chocolate lovers unite! Say hello to our delicous, new, creamy chocolate & cake dessert- a must try!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fhtrvjerl7l2ck1crwhp",
          veg: true,
          best_seller: false,
        },
        {
          id: 67,
          category: "SIDES & BEVERAGES",
          name: "Tandoori Masala Dip",
          price: 28.57,
          description:
            "Special tandoori flavor dip to add a twist to your meal",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/icpcqoet1ssvzkvd4g3m",
          veg: true,
          best_seller: false,
        },
        {
          id: 68,
          category: "SIDES & BEVERAGES",
          name: "Pack of 4 Dips",
          price: 109.52,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gvtc5ybblsammx3nemfo",
          veg: true,
          best_seller: false,
        },
        {
          id: 69,
          category: "SIDES & BEVERAGES",
          name: "Pack of 2 Dip",
          price: 57.14,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yblqo1sys6x3sdszulqq",
          veg: true,
          best_seller: false,
        },
        {
          id: 70,
          category: "SIDES & BEVERAGES",
          name: "Large Fries",
          price: 119.05,
          description:
            "Jazz up your meal with crispy large fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/r93ljtqjnlpn2xr24dln",
          veg: true,
          best_seller: false,
        },
        {
          id: 71,
          category: "SIDES & BEVERAGES",
          name: "Medium Fries",
          price: 99.05,
          description:
            "Jazz up your meal with Crispy Fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/n4ry9mep4uisjri10uqp",
          veg: true,
          best_seller: false,
        },
        {
          id: 72,
          category: "SIDES & BEVERAGES",
          name: "Pepsi PET",
          price: 57.14,
          description:
            "Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ibrkax41b0rltgjvb0k1",
          veg: true,
          best_seller: false,
        },
        {
          id: 73,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zzsh8emh9fz3v2puiijd",
          veg: true,
          best_seller: false,
        },
        {
          id: 74,
          category: "SIDES & BEVERAGES",
          name: "7UP Can 330 ml",
          price: 57.10,
          description:
            "7UP Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qn00mdssgatf9yjauq8o",
          veg: true,
          best_seller: false,
        },
        {
          id: 75,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Black Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Black Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rop9dooensk8zq97ssqj",
          veg: true,
          best_seller: false,
        },
        {
          id: 76,
          category: "SIDES & BEVERAGES",
          name: "Mirinda Can 330 ml",
          price: 57.10,
          description:
            "Mirinda Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcwmo9x7sbvhehuz59td",
          veg: true,
          best_seller: false,
        },
      ],
    },
  
    {
      id: 1,
      name: "House of Biryani",
      rating: random(),
      average_cost: 200,
      average_time: 26,
      cuisines: ["Indian", " Chinese"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z3gvpb8x9yqdeg9eqnrq",
      veg: false,
      items: [
        {
          id: 1,
          category: "Recommended",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: false,
          best_seller: false,
        },
        {
          id: 2,
          category: "Recommended",
          name: "Wednesday Bucket",
          price: 699.05,
          description:
            "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 3,
          category: "Recommended",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 4,
          category: "Recommended",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 5,
          category: "Recommended",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 6,
          category: "Recommended",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 7,
          category: "Recommended",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: false,
        },
        {
          id: 8,
          category: "Recommended",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 9,
          category: "Recommended",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 10,
          category: "Recommended",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 11,
          category: "Recommended",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 12,
          category: "Recommended",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 13,
          category: "Recommended",
          name: "Bucket for Two",
          price: 599.05,
          description: "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 14,
          category: "Recommended",
          name: "Smoky Grilled Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: true,
        },
        {
          id: 15,
          category: "Recommended",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: true,
        },
        {
          id: 16,
          category: "Recommended",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description: "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: true,
        },
        {
          id: 17,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: true,
          best_seller: true,
        },
        {
          id: 18,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Bucket",
          price: 699.05,
          description: "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 19,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 20,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 21,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 22,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 23,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: true,
        },
        {
          id: 24,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "hhttps://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 25,
          category: "STAY HOME SPECIALS",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 26,
          category: "STAY HOME SPECIALS",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 27,
          category: "STAY HOME SPECIALS",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 28,
          category: "STAY HOME SPECIALS",
          name: "Bucket for Two",
          price: 599.05,
          description:
            "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 29,
          category: "STAY HOME SPECIALS",
          name: "Smoky Grilled Biryani Combo",
          price: 699.05,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: false,
        },
        {
          id: 30,
          category: "STAY HOME SPECIALS",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: false,
        },
        {
          id: 31,
          category: "STAY HOME SPECIALS",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description:
            "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: false,
        },
        {
          id: 32,
          category: "BIG SAVE COMBOS",
          name: "5 pc Leg Piece Bucket Meal",
          price: 619.05,
          description:
            "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mvv9ssgaeu4qcykmcvc7",
          veg: false,
          best_seller: false,
        },
        {
          id: 33,
          category: "BIG SAVE COMBOS",
          name: "Ultimate Savings Bucket",
          price: 699.05,
          description:
            "Save 35% on our signature bucket of 4pc Hot & crispy chicken, 6 Wings, 4 strips, 3 Dips & a Pepsi PET [serves 2-3 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/tajxkns3jgdhfjochdke",
          veg: false,
          best_seller: false,
        },
        {
          id: 34,
          category: "BIG SAVE COMBOS",
          name: "Big 12 Bucket",
          price: 719.05,
          description:
            "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yqxxwbdxoaconjcyb7ka",
          veg: false,
          best_seller: false,
        },
        {
          id: 35,
          category: "BIG SAVE COMBOS",
          name: "8 pcs Hot & Crispy Chicken",
          price: 748.57,
          description:
            "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uspplszjphtrwqn1alef",
          veg: false,
          best_seller: false,
        },
        {
          id: 36,
          category: "BIG SAVE COMBOS",
          name: "6 pc Hot & Crispy Chicken",
          price: 619.05,
          description:
            "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ygv0a2rzffhnfgbfajz4",
          veg: false,
          best_seller: false,
        },
        {
          id: 37,
          category: "BIG SAVE COMBOS",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 38,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/t0ev2on1riwnzmmzin4t",
          veg: false,
          best_seller: false,
        },
        {
          id: 39,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with double portions of Popcorn & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sfb4moimirjyw3synieo",
          veg: false,
          best_seller: false,
        },
        {
          id: 40,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket-Large",
          price: 475.24,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fmratf6rgvdudecsu3ye",
          veg: false,
          best_seller: false,
        },
        {
          id: 41,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket",
          price: 229.52,
          description:
            "New Hyderabadi style Biryani rice served with 1 pc Hot & Crispy Chicken & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vdbrj7ouqpfbm8ekyh5o",
          veg: false,
          best_seller: false,
        },
        {
          id: 42,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 43,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 44,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Veg Biryani Bucket",
          price: 188.57,
          description:
            "New Hyderabadi style Biryani rice served with a rispy Veg Patty & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/owthzjdjtwqladefseoj",
          veg: true,
          best_seller: false,
        },
        {
          id: 45,
          category: "BURGERS",
          name: "Buddy Meal",
          price: 499.05,
          description:
            "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcblg2ctjjeswzc0lopk",
          veg: false,
          best_seller: false,
        },
        {
          id: 46,
          category: "BURGERS",
          name: "Chicken & Krispers Combo",
          price: 519.05,
          description:
            "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m038pslx2jfyqgdmlgch",
          veg: false,
          best_seller: false,
        },
        {
          id: 47,
          category: "BURGERS",
          name: "Classic Zinger Meal",
          price: 344.76,
          description:
            "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jvhlgdezs1zssu0awfa1",
          veg: false,
          best_seller: false,
        },
        {
          id: 48,
          category: "BURGERS",
          name: "Tandoori Zinger Burger",
          price: 199.05,
          description:
            "Chicken zinger with a delicious tandoori sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kp586okorqfweuvauhtv",
          veg: false,
          best_seller: true,
        },
        {
          id: 49,
          category: "BURGERS",
          name: "Classic Zinger",
          price: 189.52,
          description:
            "Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ee0rjmockusnolkgh6fl",
          veg: false,
          best_seller: true,
        },
        {
          id: 50,
          category: "BURGERS",
          name: "Veg-Non-Veg Krispers Combo",
          price: 368.57,
          description:
            "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/o3fbz2n9zczmnlrsecbj",
          veg: false,
          best_seller: false,
        },
        {
          id: 51,
          category: "BURGERS",
          name: "2 Chicken Krisper Burgers",
          price: 228.57,
          description:
            "2 delicious chicken value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ufzxglygurm6dowpbc2t",
          veg: false,
          best_seller: false,
        },
        {
          id: 52,
          category: "BURGERS",
          name: "2 Veg Krisper Burgers",
          price: 158.10,
          description:
            "2 delicious veg value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cvqb24o2vlkd967jzzas",
          veg: false,
          best_seller: false,
        },
        {
          id: 53,
          category: "SNACKS",
          name: "Mingles Bucket",
          price: 339.05,
          description:
            "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/udmgrvfuwd000kvvqrjf",
          veg: false,
          best_seller: true,
        },
        {
          id: 54,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 55,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 56,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 57,
          category: "SNACKS",
          name: "Chick'n Fries Solo Combo",
          price: 419.05,
          description:
            "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/juuygxqa8ujapiu3hpyr",
          veg: false,
          best_seller: false,
        },
        {
          id: 58,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 59,
          category: "SNACKS",
          name: "Chicken & Fries Bucket",
          price: 299.05,
          description:
            "Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pasdg6owucvi23hcp9eb",
          veg: false,
          best_seller: false,
        },
        {
          id: 60,
          category: "SNACKS",
          name: "4pcs Hot & Crispy Chicken",
          price: 428.57,
          description:
            "4 pcs of signature Hot & crispy chicken at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m7q813n17jh4nrhtt7ss",
          veg: false,
          best_seller: false,
        },
        {
          id: 61,
          category: "SNACKS",
          name: "Popcorn & Fries bucket",
          price: 319.05,
          description:
            "Large Chicken Popcorn with Med Fries - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/raq6sxtwfb9fvbd6bakq",
          veg: false,
          best_seller: false,
        },
        {
          id: 62,
          category: "SNACKS",
          name: "Large Popcorn",
          price: 228.57,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xwunbsyx5mjosb47pgpi",
          veg: false,
          best_seller: false,
        },
        {
          id: 63,
          category: "SNACKS",
          name: "Medium Popcorn",
          price: 164.76,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vq4hhfaphd4fam2kieqq",
          veg: false,
          best_seller: false,
        },
        {
          id: 64,
          category: "SNACKS",
          name: "Regular Popcorn",
          price: 115.24,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xzzsjnmakrosu2i5qatn",
          veg: false,
          best_seller: false,
        },
        {
          id: 65,
          category: "SIDES & BEVERAGES",
          name: "Coffee Mousse Cake",
          price: 128.57,
          description:
            "Coffee, chocolate, cakeàwhat's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb0kmlqdl0kjiri0qii9",
          veg: true,
          best_seller: false,
        },
        {
          id: 66,
          category: "SIDES & BEVERAGES",
          name: "Choco Mud Pie",
          price: 128.57,
          description:
            "Chocolate lovers unite! Say hello to our delicous, new, creamy chocolate & cake dessert- a must try!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fhtrvjerl7l2ck1crwhp",
          veg: true,
          best_seller: false,
        },
        {
          id: 67,
          category: "SIDES & BEVERAGES",
          name: "Tandoori Masala Dip",
          price: 28.57,
          description:
            "Special tandoori flavor dip to add a twist to your meal",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/icpcqoet1ssvzkvd4g3m",
          veg: true,
          best_seller: false,
        },
        {
          id: 68,
          category: "SIDES & BEVERAGES",
          name: "Pack of 4 Dips",
          price: 109.52,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gvtc5ybblsammx3nemfo",
          veg: true,
          best_seller: false,
        },
        {
          id: 69,
          category: "SIDES & BEVERAGES",
          name: "Pack of 2 Dip",
          price: 57.14,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yblqo1sys6x3sdszulqq",
          veg: true,
          best_seller: false,
        },
        {
          id: 70,
          category: "SIDES & BEVERAGES",
          name: "Large Fries",
          price: 119.05,
          description:
            "Jazz up your meal with crispy large fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/r93ljtqjnlpn2xr24dln",
          veg: true,
          best_seller: false,
        },
        {
          id: 71,
          category: "SIDES & BEVERAGES",
          name: "Medium Fries",
          price: 99.05,
          description:
            "Jazz up your meal with Crispy Fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/n4ry9mep4uisjri10uqp",
          veg: true,
          best_seller: false,
        },
        {
          id: 72,
          category: "SIDES & BEVERAGES",
          name: "Pepsi PET",
          price: 57.14,
          description:
            "Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ibrkax41b0rltgjvb0k1",
          veg: true,
          best_seller: false,
        },
        {
          id: 73,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zzsh8emh9fz3v2puiijd",
          veg: true,
          best_seller: false,
        },
        {
          id: 74,
          category: "SIDES & BEVERAGES",
          name: "7UP Can 330 ml",
          price: 57.10,
          description:
            "7UP Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qn00mdssgatf9yjauq8o",
          veg: true,
          best_seller: false,
        },
        {
          id: 75,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Black Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Black Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rop9dooensk8zq97ssqj",
          veg: true,
          best_seller: false,
        },
        {
          id: 76,
          category: "SIDES & BEVERAGES",
          name: "Mirinda Can 330 ml",
          price: 57.10,
          description:
            "Mirinda Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcwmo9x7sbvhehuz59td",
          veg: true,
          best_seller: false,
        },
      ],
    },
    {
      id: 2,
      name: "Chapan Bhog",
      rating: random(),
      average_cost: 150,
      average_time: 27,
      cuisines: ["Sweets", " Indian", " Desserts"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x6x1srh1d4mlnyppoyvw",
      veg: true,
      promoted: true,
      items: [
        {
          id: 1,
          category: "Recommended",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: false,
          best_seller: false,
        },
        {
          id: 2,
          category: "Recommended",
          name: "Wednesday Bucket",
          price: 699.05,
          description:
            "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 3,
          category: "Recommended",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 4,
          category: "Recommended",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 5,
          category: "Recommended",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 6,
          category: "Recommended",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 7,
          category: "Recommended",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: false,
        },
        {
          id: 8,
          category: "Recommended",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 9,
          category: "Recommended",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 10,
          category: "Recommended",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 11,
          category: "Recommended",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 12,
          category: "Recommended",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 13,
          category: "Recommended",
          name: "Bucket for Two",
          price: 599.05,
          description: "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 14,
          category: "Recommended",
          name: "Smoky Grilled Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: true,
        },
        {
          id: 15,
          category: "Recommended",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: true,
        },
        {
          id: 16,
          category: "Recommended",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description: "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: true,
        },
        {
          id: 17,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: true,
          best_seller: true,
        },
        {
          id: 18,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Bucket",
          price: 699.05,
          description: "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 19,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 20,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 21,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 22,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 23,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: true,
        },
        {
          id: 24,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "hhttps://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 25,
          category: "STAY HOME SPECIALS",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 26,
          category: "STAY HOME SPECIALS",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 27,
          category: "STAY HOME SPECIALS",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 28,
          category: "STAY HOME SPECIALS",
          name: "Bucket for Two",
          price: 599.05,
          description:
            "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 29,
          category: "STAY HOME SPECIALS",
          name: "Smoky Grilled Biryani Combo",
          price: 699.05,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: false,
        },
        {
          id: 30,
          category: "STAY HOME SPECIALS",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: false,
        },
        {
          id: 31,
          category: "STAY HOME SPECIALS",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description:
            "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: false,
        },
        {
          id: 32,
          category: "BIG SAVE COMBOS",
          name: "5 pc Leg Piece Bucket Meal",
          price: 619.05,
          description:
            "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mvv9ssgaeu4qcykmcvc7",
          veg: false,
          best_seller: false,
        },
        {
          id: 33,
          category: "BIG SAVE COMBOS",
          name: "Ultimate Savings Bucket",
          price: 699.05,
          description:
            "Save 35% on our signature bucket of 4pc Hot & crispy chicken, 6 Wings, 4 strips, 3 Dips & a Pepsi PET [serves 2-3 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/tajxkns3jgdhfjochdke",
          veg: false,
          best_seller: false,
        },
        {
          id: 34,
          category: "BIG SAVE COMBOS",
          name: "Big 12 Bucket",
          price: 719.05,
          description:
            "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yqxxwbdxoaconjcyb7ka",
          veg: false,
          best_seller: false,
        },
        {
          id: 35,
          category: "BIG SAVE COMBOS",
          name: "8 pcs Hot & Crispy Chicken",
          price: 748.57,
          description:
            "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uspplszjphtrwqn1alef",
          veg: false,
          best_seller: false,
        },
        {
          id: 36,
          category: "BIG SAVE COMBOS",
          name: "6 pc Hot & Crispy Chicken",
          price: 619.05,
          description:
            "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ygv0a2rzffhnfgbfajz4",
          veg: false,
          best_seller: false,
        },
        {
          id: 37,
          category: "BIG SAVE COMBOS",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 38,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/t0ev2on1riwnzmmzin4t",
          veg: false,
          best_seller: false,
        },
        {
          id: 39,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with double portions of Popcorn & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sfb4moimirjyw3synieo",
          veg: false,
          best_seller: false,
        },
        {
          id: 40,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket-Large",
          price: 475.24,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fmratf6rgvdudecsu3ye",
          veg: false,
          best_seller: false,
        },
        {
          id: 41,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket",
          price: 229.52,
          description:
            "New Hyderabadi style Biryani rice served with 1 pc Hot & Crispy Chicken & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vdbrj7ouqpfbm8ekyh5o",
          veg: false,
          best_seller: false,
        },
        {
          id: 42,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 43,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 44,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Veg Biryani Bucket",
          price: 188.57,
          description:
            "New Hyderabadi style Biryani rice served with a rispy Veg Patty & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/owthzjdjtwqladefseoj",
          veg: true,
          best_seller: false,
        },
        {
          id: 45,
          category: "BURGERS",
          name: "Buddy Meal",
          price: 499.05,
          description:
            "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcblg2ctjjeswzc0lopk",
          veg: false,
          best_seller: false,
        },
        {
          id: 46,
          category: "BURGERS",
          name: "Chicken & Krispers Combo",
          price: 519.05,
          description:
            "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m038pslx2jfyqgdmlgch",
          veg: false,
          best_seller: false,
        },
        {
          id: 47,
          category: "BURGERS",
          name: "Classic Zinger Meal",
          price: 344.76,
          description:
            "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jvhlgdezs1zssu0awfa1",
          veg: false,
          best_seller: false,
        },
        {
          id: 48,
          category: "BURGERS",
          name: "Tandoori Zinger Burger",
          price: 199.05,
          description:
            "Chicken zinger with a delicious tandoori sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kp586okorqfweuvauhtv",
          veg: false,
          best_seller: true,
        },
        {
          id: 49,
          category: "BURGERS",
          name: "Classic Zinger",
          price: 189.52,
          description:
            "Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ee0rjmockusnolkgh6fl",
          veg: false,
          best_seller: true,
        },
        {
          id: 50,
          category: "BURGERS",
          name: "Veg-Non-Veg Krispers Combo",
          price: 368.57,
          description:
            "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/o3fbz2n9zczmnlrsecbj",
          veg: false,
          best_seller: false,
        },
        {
          id: 51,
          category: "BURGERS",
          name: "2 Chicken Krisper Burgers",
          price: 228.57,
          description:
            "2 delicious chicken value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ufzxglygurm6dowpbc2t",
          veg: false,
          best_seller: false,
        },
        {
          id: 52,
          category: "BURGERS",
          name: "2 Veg Krisper Burgers",
          price: 158.10,
          description:
            "2 delicious veg value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cvqb24o2vlkd967jzzas",
          veg: false,
          best_seller: false,
        },
        {
          id: 53,
          category: "SNACKS",
          name: "Mingles Bucket",
          price: 339.05,
          description:
            "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/udmgrvfuwd000kvvqrjf",
          veg: false,
          best_seller: true,
        },
        {
          id: 54,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 55,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 56,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 57,
          category: "SNACKS",
          name: "Chick'n Fries Solo Combo",
          price: 419.05,
          description:
            "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/juuygxqa8ujapiu3hpyr",
          veg: false,
          best_seller: false,
        },
        {
          id: 58,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 59,
          category: "SNACKS",
          name: "Chicken & Fries Bucket",
          price: 299.05,
          description:
            "Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pasdg6owucvi23hcp9eb",
          veg: false,
          best_seller: false,
        },
        {
          id: 60,
          category: "SNACKS",
          name: "4pcs Hot & Crispy Chicken",
          price: 428.57,
          description:
            "4 pcs of signature Hot & crispy chicken at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m7q813n17jh4nrhtt7ss",
          veg: false,
          best_seller: false,
        },
        {
          id: 61,
          category: "SNACKS",
          name: "Popcorn & Fries bucket",
          price: 319.05,
          description:
            "Large Chicken Popcorn with Med Fries - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/raq6sxtwfb9fvbd6bakq",
          veg: false,
          best_seller: false,
        },
        {
          id: 62,
          category: "SNACKS",
          name: "Large Popcorn",
          price: 228.57,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xwunbsyx5mjosb47pgpi",
          veg: false,
          best_seller: false,
        },
        {
          id: 63,
          category: "SNACKS",
          name: "Medium Popcorn",
          price: 164.76,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vq4hhfaphd4fam2kieqq",
          veg: false,
          best_seller: false,
        },
        {
          id: 64,
          category: "SNACKS",
          name: "Regular Popcorn",
          price: 115.24,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xzzsjnmakrosu2i5qatn",
          veg: false,
          best_seller: false,
        },
        {
          id: 65,
          category: "SIDES & BEVERAGES",
          name: "Coffee Mousse Cake",
          price: 128.57,
          description:
            "Coffee, chocolate, cakeàwhat's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb0kmlqdl0kjiri0qii9",
          veg: true,
          best_seller: false,
        },
        {
          id: 66,
          category: "SIDES & BEVERAGES",
          name: "Choco Mud Pie",
          price: 128.57,
          description:
            "Chocolate lovers unite! Say hello to our delicous, new, creamy chocolate & cake dessert- a must try!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fhtrvjerl7l2ck1crwhp",
          veg: true,
          best_seller: false,
        },
        {
          id: 67,
          category: "SIDES & BEVERAGES",
          name: "Tandoori Masala Dip",
          price: 28.57,
          description:
            "Special tandoori flavor dip to add a twist to your meal",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/icpcqoet1ssvzkvd4g3m",
          veg: true,
          best_seller: false,
        },
        {
          id: 68,
          category: "SIDES & BEVERAGES",
          name: "Pack of 4 Dips",
          price: 109.52,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gvtc5ybblsammx3nemfo",
          veg: true,
          best_seller: false,
        },
        {
          id: 69,
          category: "SIDES & BEVERAGES",
          name: "Pack of 2 Dip",
          price: 57.14,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yblqo1sys6x3sdszulqq",
          veg: true,
          best_seller: false,
        },
        {
          id: 70,
          category: "SIDES & BEVERAGES",
          name: "Large Fries",
          price: 119.05,
          description:
            "Jazz up your meal with crispy large fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/r93ljtqjnlpn2xr24dln",
          veg: true,
          best_seller: false,
        },
        {
          id: 71,
          category: "SIDES & BEVERAGES",
          name: "Medium Fries",
          price: 99.05,
          description:
            "Jazz up your meal with Crispy Fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/n4ry9mep4uisjri10uqp",
          veg: true,
          best_seller: false,
        },
        {
          id: 72,
          category: "SIDES & BEVERAGES",
          name: "Pepsi PET",
          price: 57.14,
          description:
            "Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ibrkax41b0rltgjvb0k1",
          veg: true,
          best_seller: false,
        },
        {
          id: 73,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zzsh8emh9fz3v2puiijd",
          veg: true,
          best_seller: false,
        },
        {
          id: 74,
          category: "SIDES & BEVERAGES",
          name: "7UP Can 330 ml",
          price: 57.10,
          description:
            "7UP Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qn00mdssgatf9yjauq8o",
          veg: true,
          best_seller: false,
        },
        {
          id: 75,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Black Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Black Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rop9dooensk8zq97ssqj",
          veg: true,
          best_seller: false,
        },
        {
          id: 76,
          category: "SIDES & BEVERAGES",
          name: "Mirinda Can 330 ml",
          price: 57.10,
          description:
            "Mirinda Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcwmo9x7sbvhehuz59td",
          veg: true,
          best_seller: false,
        },
      ],
    },
    {
      id: 3,
      name: "KFC",
      rating: 4.0,
      average_cost: 400,
      average_time: 30,
      cuisines: ["American", " Snacks", " Biryani"],
      img_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ybzcozzgs8ygvvnyvtss",
      veg: false,
      promoted: true,
      items: [
        {
          id: 1,
          category: "Recommended",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: false,
          best_seller: false,
        },
        {
          id: 2,
          category: "Recommended",
          name: "Wednesday Bucket",
          price: 699.05,
          description:
            "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 3,
          category: "Recommended",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 4,
          category: "Recommended",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 5,
          category: "Recommended",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 6,
          category: "Recommended",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 7,
          category: "Recommended",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: false,
        },
        {
          id: 8,
          category: "Recommended",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 9,
          category: "Recommended",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 10,
          category: "Recommended",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 11,
          category: "Recommended",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 12,
          category: "Recommended",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 13,
          category: "Recommended",
          name: "Bucket for Two",
          price: 599.05,
          description: "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 14,
          category: "Recommended",
          name: "Smoky Grilled Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: true,
        },
        {
          id: 15,
          category: "Recommended",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: true,
        },
        {
          id: 16,
          category: "Recommended",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description: "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: true,
        },
        {
          id: 17,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Strips Bucket",
          price: 350.48,
          description:
            "Flat 55% off on 12 pc chicken strips served with 4 delicious dips",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
          veg: true,
          best_seller: true,
        },
        {
          id: 18,
          category: "WEDNESDAY EXCLUSIVES",
          name: "Wednesday Bucket",
          price: 699.05,
          description: "Flat 39% off on 10 pcs of Hot & Crispy Chicken",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
          veg: false,
          best_seller: false,
        },
        {
          id: 19,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket Meal",
          price: 931.43,
          description:
            "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
          veg: false,
          best_seller: false,
        },
        {
          id: 20,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket Meal",
          price: 827.62,
          description:
            "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
          veg: false,
          best_seller: false,
        },
        {
          id: 21,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 6s Bucket",
          price: 827.62,
          description:
            "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qrrghvl9zb3fwy5vfm6q",
          veg: false,
          best_seller: true,
        },
        {
          id: 22,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Super 4s Bucket",
          price: 579.05,
          description:
            "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aciowiholb3tmaowcu7h",
          veg: false,
          best_seller: false,
        },
        {
          id: 23,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Dream Team Bucket",
          price: 899.05,
          description:
            "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kg9oltmmnnbj2nhflkmj",
          veg: false,
          best_seller: true,
        },
        {
          id: 24,
          category: "MATCH DAY SPECIALS (SAVE UPTO 32%)",
          name: "Howzzat Biryani Combo",
          price: 690.48,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with double portions of Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & a Pepsi PET [serves 2-3]",
          img_url:
            "hhttps://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vsmati4wh9ocb2y9wqwc",
          veg: false,
          best_seller: false,
        },
        {
          id: 25,
          category: "STAY HOME SPECIALS",
          name: "Mingles Bucket Meal",
          price: 479.05,
          description:
            "Save Rs. 71 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET [serves 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/surzdstmxpioin23tmwg",
          veg: false,
          best_seller: false,
        },
        {
          id: 26,
          category: "STAY HOME SPECIALS",
          name: "Family Feast",
          price: 828.57,
          description:
            "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/upljr7gff4dzy40dpgwq",
          veg: false,
          best_seller: false,
        },
        {
          id: 27,
          category: "STAY HOME SPECIALS",
          name: "Stay Home Bucket",
          price: 788.57,
          description:
            "Save 22% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h7fsyiyvx3tawfhkh5b2",
          veg: false,
          best_seller: false,
        },
        {
          id: 28,
          category: "STAY HOME SPECIALS",
          name: "Bucket for Two",
          price: 599.05,
          description:
            "Flat Rs. 64 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wmn6qpsqazt1ln8hylum",
          veg: false,
          best_seller: false,
        },
        {
          id: 29,
          category: "STAY HOME SPECIALS",
          name: "Smoky Grilled Biryani Combo",
          price: 699.05,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Smoky Red Chicken, 2 Spicy Gravies, Medium Popcorn & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bamtq0h2rjfxtrzewmq2",
          veg: false,
          best_seller: false,
        },
        {
          id: 30,
          category: "STAY HOME SPECIALS",
          name: "Classic Biryani Combo",
          price: 740,
          description:
            "Large portions of our new Hyderabadi style Biryani rice, served with 2 pc Hot & Crispy Chicken, 2 Spicy Gravies, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jswmk1lm2bzldkj4wyae",
          veg: false,
          best_seller: false,
        },
        {
          id: 31,
          category: "STAY HOME SPECIALS",
          name: "10 strips & 2 Dips Bucket",
          price: 471.43,
          description:
            "Flat Rs. 108 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lmjx3jfrn2jvvznrdtmw",
          veg: false,
          best_seller: false,
        },
        {
          id: 32,
          category: "BIG SAVE COMBOS",
          name: "5 pc Leg Piece Bucket Meal",
          price: 619.05,
          description:
            "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mvv9ssgaeu4qcykmcvc7",
          veg: false,
          best_seller: false,
        },
        {
          id: 33,
          category: "BIG SAVE COMBOS",
          name: "Ultimate Savings Bucket",
          price: 699.05,
          description:
            "Save 35% on our signature bucket of 4pc Hot & crispy chicken, 6 Wings, 4 strips, 3 Dips & a Pepsi PET [serves 2-3 ]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/tajxkns3jgdhfjochdke",
          veg: false,
          best_seller: false,
        },
        {
          id: 34,
          category: "BIG SAVE COMBOS",
          name: "Big 12 Bucket",
          price: 719.05,
          description:
            "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yqxxwbdxoaconjcyb7ka",
          veg: false,
          best_seller: false,
        },
        {
          id: 35,
          category: "BIG SAVE COMBOS",
          name: "8 pcs Hot & Crispy Chicken",
          price: 748.57,
          description:
            "Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uspplszjphtrwqn1alef",
          veg: false,
          best_seller: false,
        },
        {
          id: 36,
          category: "BIG SAVE COMBOS",
          name: "6 pc Hot & Crispy Chicken",
          price: 619.05,
          description:
            "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ygv0a2rzffhnfgbfajz4",
          veg: false,
          best_seller: false,
        },
        {
          id: 37,
          category: "BIG SAVE COMBOS",
          name: "Friendship Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 38,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/t0ev2on1riwnzmmzin4t",
          veg: false,
          best_seller: false,
        },
        {
          id: 39,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket-Large",
          price: 475.24,
          description:
            "Large portions of our new Hyderabadi style Biryani rice served with double portions of Popcorn & 2 Spicy Gravies [serves 2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sfb4moimirjyw3synieo",
          veg: false,
          best_seller: false,
        },
        {
          id: 40,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket-Large",
          price: 475.24,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fmratf6rgvdudecsu3ye",
          veg: false,
          best_seller: false,
        },
        {
          id: 41,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Classic Chicken Biryani Bucket",
          price: 229.52,
          description:
            "New Hyderabadi style Biryani rice served with 1 pc Hot & Crispy Chicken & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vdbrj7ouqpfbm8ekyh5o",
          veg: false,
          best_seller: false,
        },
        {
          id: 42,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Popcorn Chicken Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 43,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Smoky Grilled Biryani Bucket",
          price: 699.05,
          description:
            "Save Rs. 172 on this combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vkgbt4ffd3yayebmzxia",
          veg: false,
          best_seller: false,
        },
        {
          id: 44,
          category: "BIRYANI BUCKETS (NEW)",
          name: "Veg Biryani Bucket",
          price: 188.57,
          description:
            "New Hyderabadi style Biryani rice served with a rispy Veg Patty & a Spicy Gravy [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/owthzjdjtwqladefseoj",
          veg: true,
          best_seller: false,
        },
        {
          id: 45,
          category: "BURGERS",
          name: "Buddy Meal",
          price: 499.05,
          description:
            "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcblg2ctjjeswzc0lopk",
          veg: false,
          best_seller: false,
        },
        {
          id: 46,
          category: "BURGERS",
          name: "Chicken & Krispers Combo",
          price: 519.05,
          description:
            "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m038pslx2jfyqgdmlgch",
          veg: false,
          best_seller: false,
        },
        {
          id: 47,
          category: "BURGERS",
          name: "Classic Zinger Meal",
          price: 344.76,
          description:
            "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jvhlgdezs1zssu0awfa1",
          veg: false,
          best_seller: false,
        },
        {
          id: 48,
          category: "BURGERS",
          name: "Tandoori Zinger Burger",
          price: 199.05,
          description:
            "Chicken zinger with a delicious tandoori sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kp586okorqfweuvauhtv",
          veg: false,
          best_seller: true,
        },
        {
          id: 49,
          category: "BURGERS",
          name: "Classic Zinger",
          price: 189.52,
          description:
            "Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ee0rjmockusnolkgh6fl",
          veg: false,
          best_seller: true,
        },
        {
          id: 50,
          category: "BURGERS",
          name: "Veg-Non-Veg Krispers Combo",
          price: 368.57,
          description:
            "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/o3fbz2n9zczmnlrsecbj",
          veg: false,
          best_seller: false,
        },
        {
          id: 51,
          category: "BURGERS",
          name: "2 Chicken Krisper Burgers",
          price: 228.57,
          description:
            "2 delicious chicken value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ufzxglygurm6dowpbc2t",
          veg: false,
          best_seller: false,
        },
        {
          id: 52,
          category: "BURGERS",
          name: "2 Veg Krisper Burgers",
          price: 158.10,
          description:
            "2 delicious veg value burgers - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cvqb24o2vlkd967jzzas",
          veg: false,
          best_seller: false,
        },
        {
          id: 53,
          category: "SNACKS",
          name: "Mingles Bucket",
          price: 339.05,
          description:
            "Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/udmgrvfuwd000kvvqrjf",
          veg: false,
          best_seller: true,
        },
        {
          id: 54,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 55,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 56,
          category: "SNACKS",
          name: "Super Snacker Combo",
          price: 450.48,
          description:
            "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lx9a8ub7qwozbj5mtm97",
          veg: false,
          best_seller: false,
        },
        {
          id: 57,
          category: "SNACKS",
          name: "Chick'n Fries Solo Combo",
          price: 419.05,
          description:
            "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/juuygxqa8ujapiu3hpyr",
          veg: false,
          best_seller: false,
        },
        {
          id: 58,
          category: "SNACKS",
          name: "Chick’n Wings Combo",
          price: 450.48,
          description:
            "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/soqdycnjeyzedvivoul2",
          veg: false,
          best_seller: false,
        },
        {
          id: 59,
          category: "SNACKS",
          name: "Chicken & Fries Bucket",
          price: 299.05,
          description:
            "Crowd-favorite combo of 2pc Hot & Crispy chicken with Medium Fries",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pasdg6owucvi23hcp9eb",
          veg: false,
          best_seller: false,
        },
        {
          id: 60,
          category: "SNACKS",
          name: "4pcs Hot & Crispy Chicken",
          price: 428.57,
          description:
            "4 pcs of signature Hot & crispy chicken at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m7q813n17jh4nrhtt7ss",
          veg: false,
          best_seller: false,
        },
        {
          id: 61,
          category: "SNACKS",
          name: "Popcorn & Fries bucket",
          price: 319.05,
          description:
            "Large Chicken Popcorn with Med Fries - at a deal price",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/raq6sxtwfb9fvbd6bakq",
          veg: false,
          best_seller: false,
        },
        {
          id: 62,
          category: "SNACKS",
          name: "Large Popcorn",
          price: 228.57,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xwunbsyx5mjosb47pgpi",
          veg: false,
          best_seller: false,
        },
        {
          id: 63,
          category: "SNACKS",
          name: "Medium Popcorn",
          price: 164.76,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vq4hhfaphd4fam2kieqq",
          veg: false,
          best_seller: false,
        },
        {
          id: 64,
          category: "SNACKS",
          name: "Regular Popcorn",
          price: 115.24,
          description:
            "Signature bite-sized boneless chicken, with special spices",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xzzsjnmakrosu2i5qatn",
          veg: false,
          best_seller: false,
        },
        {
          id: 65,
          category: "SIDES & BEVERAGES",
          name: "Coffee Mousse Cake",
          price: 128.57,
          description:
            "Coffee, chocolate, cakeàwhat's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb0kmlqdl0kjiri0qii9",
          veg: true,
          best_seller: false,
        },
        {
          id: 66,
          category: "SIDES & BEVERAGES",
          name: "Choco Mud Pie",
          price: 128.57,
          description:
            "Chocolate lovers unite! Say hello to our delicous, new, creamy chocolate & cake dessert- a must try!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fhtrvjerl7l2ck1crwhp",
          veg: true,
          best_seller: false,
        },
        {
          id: 67,
          category: "SIDES & BEVERAGES",
          name: "Tandoori Masala Dip",
          price: 28.57,
          description:
            "Special tandoori flavor dip to add a twist to your meal",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/icpcqoet1ssvzkvd4g3m",
          veg: true,
          best_seller: false,
        },
        {
          id: 68,
          category: "SIDES & BEVERAGES",
          name: "Pack of 4 Dips",
          price: 109.52,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gvtc5ybblsammx3nemfo",
          veg: true,
          best_seller: false,
        },
        {
          id: 69,
          category: "SIDES & BEVERAGES",
          name: "Pack of 2 Dip",
          price: 57.14,
          description:
            "Adding dips is always a good idea!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yblqo1sys6x3sdszulqq",
          veg: true,
          best_seller: false,
        },
        {
          id: 70,
          category: "SIDES & BEVERAGES",
          name: "Large Fries",
          price: 119.05,
          description:
            "Jazz up your meal with crispy large fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/r93ljtqjnlpn2xr24dln",
          veg: true,
          best_seller: false,
        },
        {
          id: 71,
          category: "SIDES & BEVERAGES",
          name: "Medium Fries",
          price: 99.05,
          description:
            "Jazz up your meal with Crispy Fries!",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/n4ry9mep4uisjri10uqp",
          veg: true,
          best_seller: false,
        },
        {
          id: 72,
          category: "SIDES & BEVERAGES",
          name: "Pepsi PET",
          price: 57.14,
          description:
            "Pepsi PET",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ibrkax41b0rltgjvb0k1",
          veg: true,
          best_seller: false,
        },
        {
          id: 73,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zzsh8emh9fz3v2puiijd",
          veg: true,
          best_seller: false,
        },
        {
          id: 74,
          category: "SIDES & BEVERAGES",
          name: "7UP Can 330 ml",
          price: 57.10,
          description:
            "7UP Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qn00mdssgatf9yjauq8o",
          veg: true,
          best_seller: false,
        },
        {
          id: 75,
          category: "SIDES & BEVERAGES",
          name: "Pepsi Black Can 330 ml",
          price: 57.10,
          description:
            "Pepsi Black Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rop9dooensk8zq97ssqj",
          veg: true,
          best_seller: false,
        },
        {
          id: 76,
          category: "SIDES & BEVERAGES",
          name: "Mirinda Can 330 ml",
          price: 57.10,
          description:
            "Mirinda Can 330 ml",
          img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zcwmo9x7sbvhehuz59td",
          veg: true,
          best_seller: false,
        },
      ],
    },
]