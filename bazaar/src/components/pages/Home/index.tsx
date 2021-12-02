import { useEffect } from "react";
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { fetchBanners, fetchCategoryList } from "../../../redux/actions";
import { Banner } from "../../../types/banner";
import { AppState } from "../../../redux/store/configureStore";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Category } from "../../../types/categories";
import CategoryCard from './Category';
import './home.css';

type Props = LinkStateProps & LinkDispatchProps;

function ProductsList(props: Props) {

    useEffect(() => {
        props.fetchBanners();
        props.fetchCategories();
    }, [props])

    const showSlides = () => {
        return (
            <div className="bannerSection">
                <CarouselProvider
                    infinite
                    isPlaying
                    naturalSlideWidth={100}
                    naturalSlideHeight={20}
                    totalSlides={props.banners.length}>
                    <Slider>
                        {
                            props.banners.map((bannerItem) => {
                                return (
                                    <Slide index={bannerItem.order}>
                                        <div className="carouselStyle">
                                            <img  src={bannerItem.bannerImageUrl} alt={bannerItem.bannerImageAlt} />
                                        </div>
                                    </Slide>
                                )
                            }
                            )}
                    </Slider>
                    <div style={{ justifyContent: 'center', display: 'flex' }}> <DotGroup /> </div>
                </CarouselProvider>
            </div>
        )
    }

    const showCategories = () => {
        return (
            <div className="categorySection">
                {props.categoryList.map((categoryObj, i) => {
                    return <CategoryCard category={categoryObj} index={i} />
                })
                }
            </div>
        )
    }

    return (
        <div className="homeContainer">
            {showSlides()}
            {showCategories()}
        </div>
    )
}


interface LinkStateProps {
    banners: Banner[],
    categoryList: Category[]
}

interface LinkDispatchProps {
    fetchBanners: () => void;
    fetchCategories: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    banners: state.banners,
    categoryList: state.categories
});

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
    fetchBanners: () => dispatch(fetchBanners()),
    fetchCategories: () => dispatch(fetchCategoryList()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList);