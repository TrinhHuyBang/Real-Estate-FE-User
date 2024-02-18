export default {
    methods: {
        showAddress(post) {
            var district = post.district.split("-")[0]
            var province = post.province.split("-")[0]
            province = province.replace("Thành phố ", "")
            province = province.replace("Tỉnh ", "")
            if (province == "Hồ Chí Minh") {
                if (district.split(" ").length > 2 && district.split(" ")[0] == "Quận") {
                    district = district.replace("Quận ", "")
                }
            } else {
                district = district.replace("Quận ", "")
            }
            district = district.replace("Huyện ", "")
            district = district.replace("Thành phố ", "")
            return district + ', ' + province
        },

        showPrice(card) {
            if (card.unit == "Thỏa Thuận") {
                return "Giá Thoả thuận";
            } else {
                if (card.type == "sell") {
                    if (card.unit == "VND/m2") {
                        return card.price / 1000 >= 1
                            ? (card.price / 1000).toFixed(2) + " tỷ" + "/m²"
                            : card.price + " triệu" + "/m²"
                    } else {
                        return card.price / 1000 >= 1
                            ? (card.price / 1000).toFixed(2) + " tỷ"
                            : card.price + " triệu"
                    }
                } else {
                    return card.price / 1000 >= 1
                        ? (card.price / 1000).toFixed(2) + " tỷ" + "/tháng"
                        : card.price + " triệu" + "/tháng";
                }
            }
        },

        showProvince(post) {
            var province = post.province.split("-")[0]
            province = province.replace("Thành phố ", "")
            province = province.replace("Tỉnh ", "")
            return province
        },
        
        showDistrict(post) {
            var district = post.district.split("-")[0]
            var province = post.province.split("-")[0]
            province = province.replace("Thành phố ", "")
            if (province == "Hồ Chí Minh") {
                if (district.split(" ").length > 2 && district.split(" ")[0] == "Quận") {
                    district = district.replace("Quận ", "")
                }
            } else {
                district = district.replace("Quận ", "")
            }
            district = district.replace("Huyện ", "")
            district = district.replace("Thành phố ", "")
            return district
        },

        formatDate(formatDate = new Date())
        {
            const date = new Date(formatDate);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;

            return formattedDate;
        },

        showTime(time) {
            const created_at = new Date(time)
            const current = new Date()
            const diffTime = current - created_at;
            if(diffTime/ (1000 * 60) < 60) {
                return Math.round(diffTime/ (1000 * 60)) + " phút trước"
            } else if(diffTime/ (1000 * 60 * 60) < 24) {
              return Math.round(diffTime/ (1000 * 60 * 60)) + " giờ trước"
            } else if(diffTime/ (1000 * 60 * 60 * 24) < 10) {
              return Math.round(diffTime/ (1000 * 60 * 60 * 24)) + " ngày trước"
            } else {
                return this.formatDate(time)
            }
        },
    }
}