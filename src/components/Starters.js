import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function Starters() {
    const [itemCount, setItemCount] = React.useState(1);
    return (
        <div className=" text-center p-5" style={{backgroundColor:'#F4FCD9'}}>
            


        <div className="row">
            
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/strawberry-and-cream-sponge-cake-on-white-wooden-table-picture-id1294578122?b=1&k=20&m=1294578122&s=170667a&w=0&h=WPdYoCBiApFK065oZUCrF9BhFQoVLeaoR7zxhUdKbfg="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Strawberry cake</h5>
                    <h5 className="card-title">$15</h5>
                    <p className="card-text">Bread dipped in a batter of egg and milk and sautéed.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/carrot-cake-with-chocolate-icing-brazilian-cake-picture-id1313708566?b=1&k=20&m=1313708566&s=170667a&w=0&h=03Gk2TvFah8PzEDgLQ0m357Wpc5NTnu9Ky7U9gncDuA="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Truffle</h5>
                    <h5 className="card-title">$13</h5>
                    <p className="card-text">Juicy, big, loaded with toppings of my choice.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/image-of-batch-of-homemade-pink-velvet-strawberry-cupcakes-in-paper-picture-id1320620498?b=1&k=20&m=1320620498&s=170667a&w=0&h=-vDtPdt-sCgb306tGIbi-ErOboQA1sbTU4hPTHvVa0E="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Cup Cakes</h5>
                    <h5 className="card-title">$18</h5>
                    <p className="card-text">Flat cake from a starch-based batter that contain eggs.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/chocolate-cake-birthday-and-celebration-with-dark-ice-cream-cocoa-picture-id1313418626?b=1&k=20&m=1313418626&s=170667a&w=0&h=EcfH-5stpwSBHkeHyd1Rxo7LwqINuFhmgTxGwhBtZLc="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Cake</h5>
                    <h5 className="card-title">$10</h5>
                    <p className="card-text">Roasted grains and usually eaten with milk.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        </div>
        
        <div className="row">
            
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/homemade-orange-cake-slices-on-rustic-wooden-table-picture-id1308292686?b=1&k=20&m=1308292686&s=170667a&w=0&h=C_50ztbtfjT67phCiDDV5u53bpmNkAb2pVwg_Us59ag="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Bread</h5>
                    <h5 className="card-title">$16</h5>
                    <p className="card-text">Salt-cured pork made from various cuts.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/corn-cake-traditional-brazilian-treats-made-of-corn-picture-id1315219219?b=1&k=20&m=1315219219&s=170667a&w=0&h=Ib6FPlbP4MKI0LfveFF1XbqTXHhIroXPVuUImr-DXE8="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Sponge Cake</h5>
                    <h5 className="card-title">$18</h5>
                    <p className="card-text">Cut from the top-blade, or infraspinatus.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/ladys-hands-holding-cup-with-sth-heartshaped-picture-id880466816?b=1&k=20&m=880466816&s=170667a&w=0&h=EmfPhci08icmztc29LCKs5IdjnPkDoPgveT6yihrSec="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Coffee</h5>
                    <h5 className="card-title">$10</h5>
                    <p className="card-text">beaten eggs cooked without stirring until set.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src="https://media.istockphoto.com/photos/strawberry-ice-cream-with-fresh-strawberries-picture-id1313871755?b=1&k=20&m=1313871755&s=170667a&w=0&h=dg2P5aDxBUfB_zrNSzLOcMHJxANbJ3ol12gg6DjHHOc="></img>
                <div className="card-body text-center">
                    <h5 className="card-title">Ice Cream</h5>
                    <h5 className="card-title">$20</h5>
                    <p className="card-text">lettuce, beetroot, cabbage, carrot, and parsnip.</p>
                    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
                </div>
            </div>
        </div>
        </div>
              
        </div>
    )
    }
    export default Starters