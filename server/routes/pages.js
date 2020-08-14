const express = require("express");
const router = express.Router();

const Page = require("../models/pages");

// GET /pages
router.get("/", (req, res) => {
    Page.find({}, (error, pages) => {
        if (error) console.log(error);
        res.json(pages);
    });
});

// POST /pages
router.post("/", (req, res) => {
    const name = req.fields.name;
    const slug = req.fields.slug;
    const content = req.fields.content;

    const page = new Page({
        name: name,
        slug: slug,
        content: content,
    });

    page.save((error) => {
        if (error) console.log(error);
        res.status(201).end();
    });
});

// PUT /pages/5
router.put("/:id", (req, res) => {
    const id = req.params.id;

    const name = req.fields.name;
    const slug = req.fields.slug;
    const content = req.fields.content;

    Page.findById(id, (error, page) => {
        if (error) console.log(error);

        page.name = name;
        page.slug = slug;
        page.content = content;

        page.save((error) => {
            if (error) console.log(error);
            res.status(201).end();
        });
    });
});

// PUT /delete/5
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Page.findByIdAndRemove(id, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.status(204).end();
        }
    });
});

module.exports = router;
