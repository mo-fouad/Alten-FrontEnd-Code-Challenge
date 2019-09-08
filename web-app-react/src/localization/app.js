import LocalizedStrings from "react-localization";

const words = new LocalizedStrings({
    en: {
        logo: "Vehicles App",
        active: "Active Only",
        tableView: "Table View",
        mapView: "Map View",
        carId: "Car ID",
        carPlate: "Car Plate Name",
        carStatus: "Car Status",
        select: "Select User",
        plate: "Plate",
        status: "Status"
    },
    se: {
        logo: "Fordon App",
        active: "Endast aktiv",
        tableView: "Tabellvy",
        mapView: "Kartvy",
        carId: "Bil-ID",
        carPlate: "Bilplattans namn",
        carStatus: "Bilstatus",
        select: "Välj Användare",
        plate: "Tallrik",
        status: "Status"
    }
});

export default words;
