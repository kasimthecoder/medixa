import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const medicines = [
  {
    _id: "69d77e0c0bc93cd66c17f4f2",
    name: "Allegra 120mg Tablet",
    slug: "allegra-120mg-tablet",
    searchName: "allegra 120mg tablet",
    price: 218.81,
    isDiscontinued: false,
    manufacturer: "Sanofi India Ltd",
    type: "allopathy",
    packSize: "strip of 10 tablets",
    composition: ["Fexofenadine (120mg)"],
    sideEffects: ["Headache", "Drowsiness", "Dizziness", "Nausea"],
    description:
      "Anti-allergy medicine used to treat sneezing, runny nose and skin allergies.",
    drugInteractions: {
      drug: ["Aprepitant", "Fosaprepitant", "Magaldrate", "Sodium Bicarbonate"],
      brand: [
        "Aprepit, Aprepep, Fos-Aprepitant",
        "Fosup, Artepitant, Fosaran",
        "Magflux, Magasip",
        "Sodamax",
      ],
      effect: ["LIFE-THREATENING", "LIFE-THREATENING", "SERIOUS", "SERIOUS"],
    },
  },
  {
    _id: "69d77e0c0bc93cd66c17f4f3",
    name: "Crocin 500 Tablet",
    slug: "crocin-500-tablet",
    searchName: "crocin 500 tablet",
    price: 32.5,
    isDiscontinued: false,
    manufacturer: "GSK India",
    type: "allopathy",
    packSize: "strip of 15 tablets",
    composition: ["Paracetamol (500mg)"],
    sideEffects: ["Nausea", "Allergic reaction", "Stomach pain"],
    description: "Used for fever and mild to moderate pain relief.",
    drugInteractions: {
      drug: ["Warfarin", "Phenytoin", "Carbamazepine"],
      brand: ["Coumadin", "Eptoin", "Tegretol"],
      effect: ["SERIOUS", "MODERATE", "MODERATE"],
    },
  },
  {
    _id: "69d77e0c0bc93cd66c17f4f4",
    name: "Brufen 400 Tablet",
    slug: "brufen-400-tablet",
    searchName: "brufen 400 tablet",
    price: 54.2,
    isDiscontinued: false,
    manufacturer: "Abbott India Ltd",
    type: "allopathy",
    packSize: "strip of 10 tablets",
    composition: ["Ibuprofen (400mg)"],
    sideEffects: ["Stomach upset", "Dizziness", "Heartburn"],
    description:
      "Pain reliever used for headache, dental pain and muscle pain.",
    drugInteractions: {
      drug: ["Aspirin", "Losartan", "Methotrexate"],
      brand: ["Ecosprin", "Losar", "Folitrax"],
      effect: ["SERIOUS", "MODERATE", "LIFE-THREATENING"],
    },
  },
  {
    _id: "69d77e0c0bc93cd66c17f4f5",
    name: "Voveran SR Tablet",
    slug: "voveran-sr-tablet",
    searchName: "voveran sr tablet",
    price: 98.7,
    isDiscontinued: false,
    manufacturer: "Novartis India Ltd",
    type: "allopathy",
    packSize: "strip of 10 tablets",
    composition: ["Diclofenac Sodium (100mg)"],
    sideEffects: ["Nausea", "Vomiting", "Stomach pain", "Drowsiness"],
    description:
      "Used to relieve pain and inflammation in conditions like arthritis.",
    drugInteractions: {
      drug: ["Lithium", "Digoxin", "Cyclosporine"],
      brand: ["Lithosun", "Lanoxin", "Immunorel"],
      effect: ["SERIOUS", "SERIOUS", "LIFE-THREATENING"],
    },
  },
];
export default function CompareTable() {
  const getStrength = (composition) => {
    const match = composition[0].match(/\((.*?)\)/);
    return match ? match[1] : "";
  };
  return (
    <div className="">
      <Table>
        <TableHeader className="">
          <TableRow>
            <TableHead>Medicine</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Composition</TableHead>
            <TableHead>Use For</TableHead>
            <TableHead>Side Effects</TableHead>
            <TableHead>Interactions</TableHead>
            <TableHead>Strength</TableHead>
            <TableHead>Manufacturer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.map((medicine) => (
            <TableRow key={medicine._id} className="h-28  m-16">
              <TableCell className="font-medium">{medicine.name}</TableCell>
              <TableCell>
                {"₹"}
                {medicine.price}{" "}
                <span className="text-xs">({medicine.packSize})</span>
              </TableCell>
              <TableCell>{medicine.composition.join(", ")}</TableCell>
              <TableCell className="">{medicine.description}</TableCell>
              <TableCell className="">
                {medicine.sideEffects.join(", ")}
              </TableCell>
              <TableCell className="">
                {medicine.drugInteractions.drug.map((drug, index) => (
                  <div key={index}>
                    {drug} - {medicine.drugInteractions.effect[index]}
                  </div>
                ))}
              </TableCell>
              <TableCell className="">
                {getStrength(medicine.composition)}
              </TableCell>
              <TableCell className="">{medicine.manufacturer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
}
