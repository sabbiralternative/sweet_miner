import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Tutorial = () => {
  return (
    <div className="sc-gIvpjk dVRMhB">
      <div className="sc-FRrlG cIjgB">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="sc-fXazdy UjHkE">
              <img
                src="/info_start.min.e014b974.png"
                alt="Start the game"
                className="sc-dvXYtj iduHXF"
              />
              <div className="sc-TtZnY dngUwA">
                <h3 className="sc-fuISkM cHQuCr">Start the game</h3>
                <div className="sc-amiJK bvMJFo">
                  Choose bet value. Choose number of rotten eggs. Press play.
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="sc-fXazdy UjHkE">
              <img
                src="/info_cashout.min.5ced9971.png"
                alt="Cash out any time"
                className="sc-dvXYtj iduHXF"
              />
              <div className="sc-TtZnY dngUwA">
                <h3 className="sc-fuISkM cHQuCr">Cash out any time</h3>
                <div className="sc-amiJK bvMJFo">
                  With every golden bunny your winnings increase. Cash out or
                  hold on for a bigger win.
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="sc-fXazdy UjHkE">
              <img
                src="/info_mine.min.c93beb17.png"
                alt="WATCH OUT FOR ROTTEN EGGS"
                className="sc-dvXYtj iduHXF"
              />
              <div className="sc-TtZnY dngUwA">
                <h3 className="sc-fuISkM cHQuCr">WATCH OUT FOR ROTTEN EGGS</h3>
                <div className="sc-amiJK bvMJFo">
                  Tiles contain golden chocolate bunnies or rotten eggs. Crack
                  the rotten egg and the bet is lost.
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="sc-fXazdy UjHkE">
              <img
                src="/info_bonus.min.2eb6d028.png"
                alt="Increased chance of a win"
                className="sc-dvXYtj iduHXF"
              />
              <div className="sc-TtZnY dngUwA">
                <h3 className="sc-fuISkM cHQuCr">Increased chance of a win</h3>
                <div className="sc-amiJK bvMJFo">
                  TreasureBoost is a random feature that increases the players’
                  chances of revealing a golden bunny.
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
        {/* <div
          style={{ display: "none" }}
          className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
        >
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
          </div>
          <div
            className="swiper-wrapper"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(-310px, 0px, 0px)",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
              data-swiper-slide-index={3}
              style={{ width: "300px", marginRight: "10px" }}
            >
              <section className="sc-fXazdy UjHkE">
                <img
                  src="/info_bonus.min.2eb6d028.png"
                  alt="Increased chance of a win"
                  className="sc-dvXYtj iduHXF"
                />
                <div className="sc-TtZnY dngUwA">
                  <h3 className="sc-fuISkM cHQuCr">
                    Increased chance of a win
                  </h3>
                  <div className="sc-amiJK bvMJFo">
                    TreasureBoost is a random feature that increases the
                    players’ chances of revealing a golden bunny.
                  </div>
                </div>
              </section>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={0}
              style={{ width: "300px", marginRight: "10px" }}
            >
              <section className="sc-fXazdy UjHkE">
                <img
                  src="/info_start.min.e014b974.png"
                  alt="Start the game"
                  className="sc-dvXYtj iduHXF"
                />
                <div className="sc-TtZnY dngUwA">
                  <h3 className="sc-fuISkM cHQuCr">Start the game</h3>
                  <div className="sc-amiJK bvMJFo">
                    Choose bet value. Choose number of rotten eggs. Press play.
                  </div>
                </div>
              </section>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index={1}
              style={{ width: "300px", marginRight: "10px" }}
            >
              <section className="sc-fXazdy UjHkE">
                <img
                  src="/info_cashout.min.5ced9971.png"
                  alt="Cash out any time"
                  className="sc-dvXYtj iduHXF"
                />
                <div className="sc-TtZnY dngUwA">
                  <h3 className="sc-fuISkM cHQuCr">Cash out any time</h3>
                  <div className="sc-amiJK bvMJFo">
                    With every golden bunny your winnings increase. Cash out or
                    hold on for a bigger win.
                  </div>
                </div>
              </section>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={2}
              style={{ width: "300px", marginRight: "10px" }}
            >
              <section className="sc-fXazdy UjHkE">
                <img
                  src="/info_mine.min.c93beb17.png"
                  alt="WATCH OUT FOR ROTTEN EGGS"
                  className="sc-dvXYtj iduHXF"
                />
                <div className="sc-TtZnY dngUwA">
                  <h3 className="sc-fuISkM cHQuCr">
                    WATCH OUT FOR ROTTEN EGGS
                  </h3>
                  <div className="sc-amiJK bvMJFo">
                    Tiles contain golden chocolate bunnies or rotten eggs. Crack
                    the rotten egg and the bet is lost.
                  </div>
                </div>
              </section>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-prev"
              data-swiper-slide-index={3}
              style={{ width: "300px", marginRight: "10px" }}
            >
              <section className="sc-fXazdy UjHkE">
                <img
                  src="/info_bonus.min.2eb6d028.png"
                  alt="Increased chance of a win"
                  className="sc-dvXYtj iduHXF"
                />
                <div className="sc-TtZnY dngUwA">
                  <h3 className="sc-fuISkM cHQuCr">
                    Increased chance of a win
                  </h3>
                  <div className="sc-amiJK bvMJFo">
                    TreasureBoost is a random feature that increases the
                    players’ chances of revealing a golden bunny.
                  </div>
                </div>
              </section>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={0}
              style={{ width: "300px", marginRight: "10px" }}
            >
              <section className="sc-fXazdy UjHkE">
                <img
                  src="/info_start.min.e014b974.png"
                  alt="Start the game"
                  className="sc-dvXYtj iduHXF"
                />
                <div className="sc-TtZnY dngUwA">
                  <h3 className="sc-fuISkM cHQuCr">Start the game</h3>
                  <div className="sc-amiJK bvMJFo">
                    Choose bet value. Choose number of rotten eggs. Press play.
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Tutorial;
