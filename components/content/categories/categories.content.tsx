import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import CategoriesData from "./categoriesdata";
import SearchInputs from "./search-inputs";
import { withStyles, createStyles } from "@material-ui/styles";
import { Theme, Link } from "@material-ui/core";
import NormalLink from "../../styles/links/link.normal";

class SimpleExpansionPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { search: "" };
  }
  onChange = (e: any) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const { classes } = this.props;
    const filteredCategorie = CategoriesData.filter(data => {
      return data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className={classes.root}>
        <div className={classes.center}>
          <div className={classes.search}>
            <SearchInputs onChange={this.onChange}></SearchInputs>
          </div>
          <GridList
            cellHeight={200}
            spacing={10}
            className={classes.gridList}
            cols={3}
          >
            {filteredCategorie.map(tile => (
              <GridListTile key={tile.title}>
                <img src={tile.img} alt={tile.title} className={classes.img} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>

        <div className={classes.leftSide}>
          <div>
            <NormalLink href={"#"}>
              <Link>Categories:</Link>
            </NormalLink>
          </div>
          <br />
          <div>
            {CategoriesData.map(tile => (
              <NormalLink href={"#"}>
                <Link onChange={this.onChange}>{tile.title}</Link>
              </NormalLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "grid",
      gridTemplateAreas: `
          'leftside center rightside'
          `,
      gridTemplateColumns: "25% 50% 25%",
      gridGap: 20,
      padding: theme.spacing(8, 20)
    },
    center: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      gridArea: "center"
    },
    gridList: {
      width: "600px",
      height: "550px"
    },
    img: {
      height: "155px",
      width: "184.4px"
    },
    search: {
      position: "relative",
      marginRight: theme.spacing(50),
      marginBottom: theme.spacing(5),
      marginLeft: 0,
      width: "100%"
    },
    leftSide: {
      gridArea: "leftside"
    }
  });

export default withStyles(useStyles)(SimpleExpansionPanel);
