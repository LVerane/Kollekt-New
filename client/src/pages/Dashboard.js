//this is the page that will render as soon as someone logs in
import Footer from "../components/Footer";
import React, { Component } from "react";
import Nav from "../components/Nav";
import "./Dashboard.css";
// import Card from "../components/Cards";
// import Profile from "../components/Profile";
import Dashboardjs from "../components/DashboardComp/Dashboardjs";
// import Profile from "../components/Profile/index";
import CreateCollection from "../components/CreateCollection/CreateCollection";
import ShowCollection from "../components/CreateCollection/ShowCollection";
import CustomCollection from "../components/CreateCollection/CustomCollection";

import API from "../utils/API";

class Dashboard extends Component {
  state = {
    name: "",
    type: "",
    searchAllCollectionsResult: [],
    isPrivate: true,
    customCollectionFields: {},
    customFields: {},
    newItemFields: { text: [], number: [], date: [] }
  };

  // collectionsToState = async text => {
  //   await this.setState({ someState: text });
  //   console.log("----hey----");
  //   console.log(this.state.someState);
  // };

  // componentDidMount() {
  //   this.searchAllUserCollections();
  // }

  // searchAllUserCollections = () => {
  //   API.getAllUserCollections()
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ searchAllCollectionsResult: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state[name]);
  };

  handleCheckboxChange = event => {
    this.setState({ isPrivate: event.target.checked });
  };

  handleFormSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
    let itemFields = [];
    let image = "";
    switch (this.state.type) {
      case "Music":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "text1", type: "text", displayName: "Artist" },
          { name: "text2", type: "text", displayName: "Album" },
          { name: "text3", type: "text", displayName: "Genre" },
          { name: "date1", type: "date", displayName: "Release Date" },
          { name: "number1", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/vinyl.jpg";

        break;
      case "Comics":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "text1", type: "text", displayName: "Title" },
          { name: "text2", type: "text", displayName: "Series" },
          { name: "text3", type: "text", displayName: "Issue" },
          { name: "text4", type: "text", displayName: "Genre" },
          { name: "date1", type: "date", displayName: "Release Date" },
          { name: "number1", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/comic.jpeg";
        break;
      case "Currency":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "text1", type: "text", displayName: "Type" },
          { name: "text2", type: "text", displayName: "Country" },
          { name: "text3", type: "text", displayName: "Mint Mark" },
          { name: "number1", type: "number", displayName: "Year" },
          { name: "number2", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/coins.jpg";
        break;
      case "Cards":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "text1", type: "text", displayName: "Name" },
          { name: "text2", type: "text", displayName: "Game" },
          { name: "text3", type: "text", displayName: "Type" },
          { name: "number1", type: "number", displayName: "Year" },
          { name: "number2", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/cards.jpg";
        break;
      case "Other":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "text1", type: "text", displayName: "Name" },
          { name: "text2", type: "text", displayName: "Description" },
          { name: "date1", type: "date", displayName: "Date" },
          { name: "number1", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/vinyl.jpg";
        break;
      default:
        return;
    }
    const newCollection = {
      name: this.state.name,
      type: this.state.type,
      isPrivate: this.state.isPrivate,
      itemFields: itemFields,
      image: image,
      profileId: id
    };
    console.log(newCollection);
    API.createCollection(newCollection)
      .then(res => {
        console.log(res.data);
        window.location.reload();
        // this.searchAllCollections(); //replace with a search for your collections
      })
      .catch(err => console.log(err));
  };

  setCollectionType = text => {
    this.setState({ type: text });
  };

  deleteCollection = (collectionId, profileId) => {
    API.deleteCollection(collectionId, profileId)
      .then(window.location.reload())
      .catch(err => console.log(err));
  };

  // selectCustomField = async name => {
  //   console.log(name);
  //   let newBoolean;
  //   //could make customCollection an empty state by default instead of the && clause
  //   // if (this.state.customCollection && this.state.customCollection[name]) {
  //   //made an empty state by default to solve empty prop issues on components
  //   if (this.state.customCollection[name]) {
  //     newBoolean = false;
  //   } else {
  //     newBoolean = true;
  //   }
  //   await this.setState(prevState => ({
  //     customCollection: {
  //       ...prevState.customCollection,
  //       [name]: newBoolean
  //     }
  //   }));
  //   console.log(this.state.customCollection);
  // };

  selectCustomField = async (number, type) => {
    console.log(number + " " + type);
    await this.setState(prevState => ({
      customCollectionFields: {
        ...prevState.customCollectionFields,
        [type]: number
      }
    }));
    console.log(this.state.customCollectionFields);

    // this.state.customCollectionFields.map((item, index)=>{

    // })

    //     this.setState({
    //   searchResult: this.state.searchResult.concat(res.data)
    // });
    //creating a separate state array for each and joining them later seems better
    [...Array(number)].map(async (e, i) => {
      await this.setState(prevState => ({
        newItemFields: {
          ...prevState.newItemFields,
          [type]: [
            ...this.state.newItemFields[type],
            { name: type + i, type: type, displayName: "" }
          ]
        }
      }));
    });
    console.log(this.state.newItemFields);
    // console.log("-");
    // const test = [...Array(number)];
    // console.log(test.length);
    // console.log("-");

    // this.setState({ type: number });
    // newItemFields[type]
    // await this.setState(prevState => ({
    //   newItemFields: {
    //     ...prevState.newItemFields,
    //     [type]: number
    //   }
    // }));
  };
  // {[...Array(props.customCollectionFields.text || 0)].map((e, i) => (
  // newItemFields
  updateCustomFields = async event => {
    const { name, value } = event.target;
    await this.setState(prevState => ({
      customFields: {
        // object that we want to update
        ...prevState.customFields, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }));
    console.log(this.state.customFields);
  };

  updateNewFields = event => {
    //name is a position and text should be a variable passed
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    // this.setState(prevState => ({
    //   newItemFields: {
    //     ...prevState.newItemFields,
    //     text: [...this.state.newItemFields.text[name], { displayName: value }]
    //   }
    // }));
    console.log(this.state.newItemFields);
  };

  //mostly does the thing, but in a clunky way
  tempCreateCustom = event => {
    event.preventDefault();
    console.log("---");
    console.log(this.state.customFields);
    console.log("---");
    const objKeys = Object.keys(this.state.customFields);
    const objValues = Object.values(this.state.customFields);
    const itemFields = [{ name: "image", type: "text", displayName: "Image" }];
    console.log("object keys");
    console.log(objKeys);
    console.log("object values");
    console.log(objValues);
    console.log("full object");
    console.log(this.state.customFields);
    //setting type: "text" to all, change that later
    objKeys.forEach((objKey, index) => {
      itemFields.push({
        name: objKey,
        type: "text",
        displayName: objValues[index]
      });
    });
    console.log(itemFields);
  };

  render() {
    return (
      <div className="dash-card-margin">
        <Nav />
        <div className="masthead3 pt-5">
          <div className="search-container3">
            {/* Profile isnt actually being used */}
            {/* <Profile /> */}
            {/* <div className="search-container3"> */}
            <Dashboardjs />
            {/* </div> */}
          </div>
          {/* <Collections /> */}
        </div>
        <CreateCollection
          name={this.state.name}
          type={this.state.type}
          isPrivate={this.state.isPrivate}
          handleCheckboxChange={this.handleCheckboxChange}
          setCollectionType={this.setCollectionType}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          // selectCustomField={this.selectCustomField}
          // customCollection={this.state.customCollection}
        />
        <CustomCollection
          selectCustomField={this.selectCustomField}
          customCollectionFields={this.state.customCollectionFields}
          updateCustomFields={this.updateCustomFields}
          customFields={this.state.customFields}
          tempCreateCustom={this.tempCreateCustom}
          newItemFields={this.state.newItemFields}
          updateNewFields={this.updateNewFields}
        />
        <ShowCollection deleteCollection={this.deleteCollection} />
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
