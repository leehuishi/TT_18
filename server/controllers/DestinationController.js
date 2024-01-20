const db = require("../models");

// models
const Destination = db.destination;

// create destination
const createDestination = async (req, res) => {
        const destinations = {
            country_id: req.body.country_id,
            cost: req.body.cost,
            name: req.body.name,
            notes: req.body.notes
        };
        await Destination.create(destinations)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the destination."
          });
        });
}

const deleteDestination = async (req, res) => {
    
    const id = req.params.id;

    await Destination.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "destination was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete destination with id=${id}. Maybe destination was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete destination with id=" + id
        });
      });

}

const editDestination = async (req, res) => {
    const id = req.params.id;

    await Destination.update(req.body, {
        where: { id: id}
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "destination was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update destination with id=${id}. Maybe destination was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating destination with id=" + id
        });
      });
}



module.exports = {
    createDestination,
    deleteDestination,
    editDestination
}