CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    post UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
    parent UUID REFERENCES comments(id) ON DELETE CASCADE NOT NULL,
    body VARCHAR NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
