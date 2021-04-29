# grapql
Graph Query Language
History
- Dự án nội bộ của FB
- 2015 Open source
- 2018 Các tổ chức phi lợi nhuận

Theory: Học thuyết đồ thị
- Biểu diễn một resource là một node duy nhất trên đồ thị
- Định nghĩa mối quan hệ giữa các node
- Truy vấn API là quá trình duyệt qua đồ thị

Goals
- Tăng năng suất làm việc cho dev bằng việc trao quyền truy cập
- Giảm thiểu lượng data không cần thiết qua network

Syntax
- Schema specification
- Operation specification

Query
- Là quá trình duyệt từ Node gốc tới lá
- Tại mỗi node xác định một field cần lấy
- Có thể định argument cho từng fields để lấy dữ liệu mong muốn
- Client chỉ cần request một lần có thể lấy tất cả dữ liệu cần

Schema 
 - Server-side
 - Schemas are graphs, hence the name
 - Type is a Node
 - subField is an Edge
 - String/Int/Boolean/enum are scalars
 - scalars are Node properties
 - Required (..!) and List ([...])
 => GraphQl đinh nghĩa Schema Là một mối quan hệ giữa các Node
 => Mỗi Node bao gồm nhiều fields, mỗi field được định nghĩa một hàm để truy vấn 
 => Định nghĩa kiểu dữ liệu cho từng Node và từng Field
 => Có thể định nghĩa Interface cho từng Node

Type
- Có thể định nghĩa từng type riêng theo nhu cầu UserType, StoreType...
- Graphql định nghĩa Primitive Type, ObjectType, Enum, Union, Interface...

Node
- Định nghĩa Type
- Định nghĩa Fields
- Định nghĩa hàm resolvers để truy vấn

Resolver
- Dùng để truy vấn dữ liệu 
- Có 2 loại ResolveField và Resolve
- ResolveField định nghĩa ở mức Node
- Resolve định nghĩa cho từng field

Mở rộng
- Có thể giảm bớt các Node và các mỗi quan hệ giữa các node
- Các node cho thể truy vấn cấu trúc dữ liệu đọc lập với nhau
- Vẫn đảm bảo 1 endPoint duy nhất với Client
- Không cần sử dụng version để định nghĩa
                         
                Node <- Root -> Node -> new Node
                                  |-> new Node                      

Hạn chế
- Cần tính toán tối ưu truy vấn dữ liệu do truy vấn nhiều node
- Tham khảo tính dataloader của FB (Implement bằng nodejs)

ex: 
schema: (
    type Query{
        me: User
    }
    type User{
        id: ID
        name: String!
        level: Membership
        friends: [User]
    }

    enum Membership{
        Silver
        Gold
        Platinum
    }
)
 
Operation 
- Client-side
- Operation queries are trees (not graphs)
- multiple queries/mutation in one operation
- accept variables
- mutation implies side-effects
- query implies side-effect free
 
ex: (
    query{
        me {
            name
            level
            friends{name}
        }
    }

    mutation ($name: String!){
        registerUser(name: $name){
            name
            level
        }
    }
)

Advanced features
- Directives: extend functionality of a type or a subfield
- Subscription: receive realtime pushed data
- Custom scalar type (Sử dụng scalar custom kiểu dữ liệu mới mà Graphql ko có sẵn, Date,...)
- Interface, Union
- Extensions: automatic persisted query (
    Apolo client tự động white list câu query bằng cheat, 
    Authen được câu query giảm thiểu sự tấn công, 
    Giảm thiểu lượng băng thông gửi lên server)
- tracing, query planner, caching (Apolo server)
ex
    name: String! (@validate(minLen: 2, maxLen: 255))
    @defer


REST and GRAPHQL
- !difference business logic Which: BE or FE
 + RESt expose resource for user, 
 + Graphql dev ưu tiên hơn cho user thực hiện action nào..
- Encapsulate dataStructure, no expose structure of Database
 + REST don't take care resolve will leading to expose structure of Database
 + Graphql always define subFields in Schema
- Caching
 + REst: HTTP browser handle very well caching resource endpoint
 + Graphql: difficult
- Standard
 + HTTP Code

=> GRAPHQL use when UI-first
=> REST: Server to server, data-first


https://www.apollographql.com/
https://the-guild.dev/blog/graphql-deep-dive-3
https://www.apollographql.com/docs/apollo-server/getting-started/
