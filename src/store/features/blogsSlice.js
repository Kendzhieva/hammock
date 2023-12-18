import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance, instanceWithToken } from 'configs/instance';

export const createBlog = createAsyncThunk(
    'blogs/create',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instanceWithToken.post(
                'blogs', data)

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

// {
// 	"id": 1,
// 	"title": "dfdgfg",
// 	"content": "dfgdfgdgdfgdfgdfgdfgdfg",
// 	"images": null,
// 	"updatedAt": "2023-12-10T09:26:38.526Z",
// 	"createdAt": "2023-12-10T09:26:38.526Z"
// }

export const getAllBlogs = createAsyncThunk(
    'blogs/get-all',
    async (_, { rejectWithValue }) => {
        try {
            const response = await instance.get('blogs')

            return response.data.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const getOneBlog = createAsyncThunk(
    'blogs/get-one',
    async (id, { rejectWithValue }) => {
        try {
            const response = await instance.get(`blogs/${id}`)

            console.log(typeof id);
            return response.data[0];
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const editBlog = createAsyncThunk(
    'blogs/edit',
    async ({ data, id }, { rejectWithValue }) => {
        try {
            const response = await instanceWithToken.patch(
                `blogs/${id}`, data)

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const deleteBlog = createAsyncThunk(
    'blogs/delete',
    async (id, { rejectWithValue }) => {
        try {
            await instanceWithToken.delete(
                `blogs/${id}`)

            return id;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        blog: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBlog.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(createBlog.fulfilled, (state, action) => {
            state.blogs = [...state.blogs, action.payload];
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(createBlog.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(getAllBlogs.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(getAllBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(getAllBlogs.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(getOneBlog.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(getOneBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(getOneBlog.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(editBlog.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(editBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(editBlog.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });

        builder.addCase(deleteBlog.pending, (state, action) => {
            state.status = 'Loading';
            state.error = null;
        });
        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            state.blogs = state.blogs.filter((item) => item.id !== action.payload);
            state.status = 'success';
            state.error = null;
        });
        builder.addCase(deleteBlog.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload || null;
        });
    },
});

export default blogsSlice.reducer;
