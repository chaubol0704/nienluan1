import React from 'react'

const About = () => {
  return (
    <div>        
        <div className="row row-small flex  bg-white" >
                <div className="col medium-6 small-12 large-6 w-3/5 p-10 ml-10">
                    <div className="col-inner">
                    <h3 className="alt-font">
                        <span>Restaurant</span>
                    </h3>
                    <p>
                        <span>
                        Khi nói đến Hàn Quốc, ẩm thực là nét văn hóa đặc trưng không thể bỏ
                        qua và thịt nướng Hàn Quốc luôn được “truyền tai” về độ tươi ngon, đậm
                        đà qua những trang cẩm nang du lịch hay những bộ phim Hàn gây bão
                        </span>
                    </p>
                    <p>
                        <span>
                        Hệ thống <strong>Sun Homes BBQ</strong> hiện có 17 nhà hàng trong đó 7
                        nhà hàng chuyên về Buffet tự chọn (Buffet) và 10 nhà hàng chuyên về
                        gọi món (Alacarte).
                        </span>
                    </p>
                    <p>
                        <span>
                        Hãy lựa chọn địa điểm gần bạn nhất và liên hệ đặt bàn ngay nhé!
                        </span>
                    </p>
                    <a type='button' className="button white is-outline lowercase">
                        {/* // icon */}
                        <i className="icon-search" /> <span>Nhà hàng</span>
                    </a>
                    </div>
                </div>
                <div className="col medium-6 small-12 large-6 flex justify-between">
                    <div className="col-inner">
                    <div className="row row-994572959 flex p-10 gap-10 ml-10">
                        <div className="col medium-6 small-12 large-6 w-2/5">
                        <div className="col-inner">
                            <div className="img has-hover x md-x lg-x y md-y lg-y image_1847476733">
                            <div className="img-inner dark">
                                <img
                                src="https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/nha-hang-king-bbq-1-2-679x1024.jpg"
                                className="attachment-original size-original"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcSet="https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/nha-hang-king-bbq-1-2-679x1024.jpg 679w, https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/nha-hang-king-bbq-1-2-679x1024-199x300.jpg 199w"
                                sizes="(max-width: 679px) 100vw, 600px"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col medium-6 small-12 large-6 w-2/5">
                        <div className="col-inner">
                            <div className="img has-hover x md-x lg-x y md-y lg-y image_271824181">
                            <div className="img-inner dark">
                                <img
                                src="https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/nha-hang-king-bbq-1-1-679x1024.jpg"
                                className="attachment-original size-original"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcSet="https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/nha-hang-king-bbq-1-1-679x1024.jpg 679w, https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/nha-hang-king-bbq-1-1-679x1024-199x300.jpg 199w"
                                sizes="(max-width: 679px) 100vw, 600px"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About