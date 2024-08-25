import expresss from "express";

const router = expresss.Router();

router.get("/:name", async (req, res) => {
  try {
    const medicineName = req.params.name;
    let response = await fetch(
      `https://api.fda.gov/drug/label.json?search=${medicineName}`
    );
    let data = await response.json();
    const medInfo = data.results[0];
    
    if (data.results && data.results.length > 0) {
      const results = {
        warnings: medInfo.warnings || "No warning information available",

        usage: medInfo.usage || "No usage information available",

        purpose: medInfo.purpose || "No  information available",

        indications:
          medInfo.indications_and_usage || "No indications available",
        adverse_reactions:
          medInfo.adverse_reactions || "No adverse reactions available",
        active_ingredient:
          medInfo.active_ingredient ||
          "No active ingredient information available",
        general_precautions:
          medInfo.general_precautions || "No general precautions available",
      };
      res.json(results);
    } else {
      res.json(error);
    }
  } catch (error) {
    console.error("Error fetching medicine data:", error);
    res.status(500).json({ error: "Error fetching data from FDA API " });
  }
});

export default router;
