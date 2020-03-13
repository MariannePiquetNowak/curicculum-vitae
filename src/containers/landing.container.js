import { connect } from "react-redux";

// Import de mon action 
import { setVisibilityView } from "../actions/view.action";

// Import : local 
import Container from "../components/container";

// Préparation des données / State

const mapStateToProps = (state) => {
    console.log('chargement de mon state', state.LandingPageReducer.view) // Mon reducer ne se charge pas !!!!!!!!!!! bordel bshjdfgjsrdbfvdjhfbvsjhdfbjhkhgvrfkdjhvkjedfrhg
    return {
        view: state.LandingPageReducer.view
    }
}

console.log(mapStateToProps)

const mapDispatchToProps = (dispatch) => {
    return {
        // Ma fonction addView doit renvoyer l'action du changement de vue
        addView: (view) => dispatch(setVisibilityView(view))
    }
}

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default PageContainer;