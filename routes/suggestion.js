import express from "express"

const router= express.Router()

router.get("/:name",async (req,res)=>{
    try {
        const medicineName=req.params.name
        const response = await fetch(
          `https://api.fda.gov/drug/label.json?search=openfda.brand_name:(${medicineName}*)&limit=5`
        );
        const data= await response.json()
        if(data.results && data.results.length>0){
            const suggestions = data.results
              .map((item) => item.openfda.brand_name[0])
              .filter((name) =>
                name.toLowerCase().includes(medicineName.toLowerCase())
              );
            res.json({suggestions})
        }
        else{
            res.json({suggestions:[]})
        }
    } catch (error) {
        res.status(500).json({error:"Failed to fetch suggestions"})
    }
    
})

export default router