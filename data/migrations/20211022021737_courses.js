
exports.up = function(knex) {
    return knex.schema
        .createTable("courses", (tbl) => {
            tbl.increments("course_id");
            tbl.string("course_name", 128).notNullable().unique();
            tbl.string("course_description", 128).notNullable();
            tbl.string("course_image");
            tbl
                .uuid("owner_id")
                .unsigned()
                .notNullable()
                .references("user_id")
                .inTable("users")
                .onDelete("CASCADE");
            })
        .createTable("course_user_table", tbl => {
            tbl.increments("course_user_id");
            tbl
                .integer("course_id")
                .unsigned()
                .notNullable()
                .references("course_id")
                .inTable("courses")
                .onDelete("RESTRICT");
            tbl
                .uuid("user_id")
                .unsigned()
                .notNullable()
                .references("user_id")
                .inTable("users")
                .onDelete("RESTRICT");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("course_user_table")
        .dropTableIfExists("courses");
};
